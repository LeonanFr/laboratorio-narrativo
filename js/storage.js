const USER_KEY = "lab_narrativo_user_v3";
const PROGRESS_KEY = "lab_narrativo_progress_v3";

export const storage = {
  getUser: () => JSON.parse(localStorage.getItem(USER_KEY)),
  saveUser: (user) => localStorage.setItem(USER_KEY, JSON.stringify(user)),
  clearAll: () => {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(PROGRESS_KEY);
  },

  getProgress: () => {
    const defaultProgress = {
      casesCompleted: [],
      techniquesUnlocked: [],
      fragmentsUnlocked: [],
      rewrites: {},
      notes: {},
      activitiesCompleted: [],
    };
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || defaultProgress;
  },

  saveProgress: (progress) =>
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)),

  completeCase: (caseId, rewriteText, checklist) => {
    const p = storage.getProgress();
    if (!p.casesCompleted.includes(caseId)) p.casesCompleted.push(caseId);
    p.rewrites[caseId] = { text: rewriteText, checklist: checklist };
    storage.saveProgress(p);
  },

  unlockTechnique: (techId) => {
    const p = storage.getProgress();
    if (!p.techniquesUnlocked.includes(techId)) {
      p.techniquesUnlocked.push(techId);
      storage.saveProgress(p);
      return true;
    }
    return false;
  },

  checkFragmentUnlocks: (fragmentsData) => {
    const p = storage.getProgress();
    let unlockedAny = false;
    fragmentsData.forEach((frag) => {
      if (
        p.casesCompleted.length >= frag.unlockRequirement.casesSolved &&
        !p.fragmentsUnlocked.includes(frag.id)
      ) {
        p.fragmentsUnlocked.push(frag.id);
        unlockedAny = true;
      }
    });
    if (unlockedAny) storage.saveProgress(p);
    return unlockedAny;
  },

  saveNote: (techId, text) => {
    const p = storage.getProgress();
    if (!p.notes) p.notes = {};
    p.notes[techId] = text;
    storage.saveProgress(p);
  },

  getNote: (techId) => {
    const p = storage.getProgress();
    return p.notes && p.notes[techId] ? p.notes[techId] : "";
  },

  completeActivity: (actId) => {
    const p = storage.getProgress();
    if (!p.activitiesCompleted.includes(actId)) {
      p.activitiesCompleted.push(actId);
      storage.saveProgress(p);
    }
  },
};
