export const THEME_STORAGE_KEY = "theme";

export type ThemeChoice = "light" | "dark";

export const themeBootScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});var dark=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.dataset.theme=dark?"dark":"light";}catch(e){}})();`;

export function readThemeChoice(): ThemeChoice {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(choice: ThemeChoice) {
  document.documentElement.dataset.theme = choice;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, choice);
  } catch {
    // Private browsing can block storage; the in-memory choice still applies.
  }
}
