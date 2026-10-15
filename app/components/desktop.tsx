"use client";

import { Frame, List, Modal, TaskBar, TitleBar } from "@react95/core";
import { Awfxcg321303, MsDos, Notepad, Progman26 } from "@react95/icons";
import Image from "next/image";
import {
  useEffect,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";
import { CapitalistIcon, QuizIcon, ResearchIcon, ThemeIcon } from "./icons";
import { Resume } from "./resume";
import { applyTheme, readThemeChoice, type ThemeChoice } from "../theme";

const DESKTOP_PLAY =
  "(min-width: 768px) and (hover: hover) and (pointer: fine)";

type ProgramId =
  | "resume"
  | "contact"
  | "quiz"
  | "capitalist"
  | "research"
  | "prehistorik"
  | "readme";

type Program = {
  title: string;
  content: ReactNode;
  icon: ReactElement;
  position?: { x: number; y: number };
  frame?: number;
  centerX?: boolean;
};

function windowFrame(id: ProgramId): CSSProperties {
  const program = programs[id];
  const desired = program.frame ?? 360;
  const width = `min(${desired}px, calc(100vw - 24px))`;
  const x = program.position?.x ?? 0;
  const y = 50 + (program.position?.y ?? 0);

  if (id === "readme") {
    return {
      width,
      boxSizing: "border-box",
      left: "50%",
      top: "calc(50% - 16px)",
      transform: "translate(-50%, -50%)",
      maxHeight: "calc(100dvh - 72px)",
    };
  }

  const top = `clamp(8px, ${y}px, calc(100dvh - 160px))`;

  return {
    width,
    boxSizing: "border-box",
    left: program.centerX
      ? "50%"
      : `clamp(12px, ${x}px, calc(100vw - min(${desired}px, 100vw - 24px) - 12px))`,
    top,
    maxHeight: `calc(100dvh - 48px - ${top})`,
    ...(program.centerX ? { transform: "translateX(-50%)" } : {}),
  };
}

function Document({ children }: { children: ReactNode }) {
  return (
    <Frame
      boxShadow="$input"
      bgColor="$inputBackground"
      p="$8"
      display="flex"
      flexDirection="column"
      gap="$8"
    >
      {children}
    </Frame>
  );
}

function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="text-(--link) underline"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function AppPage({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Document>
      {children}
      <p>
        <TextLink href={href} external>
          {href.replace("https://", "")}
        </TextLink>
      </p>
    </Document>
  );
}

const contactLinks = [
  { href: "mailto:delicjasmi@gmail.com", label: "delicjasmi@gmail.com" },
  { href: "tel:+38762355912", label: "+387 62 355 912" },
  {
    href: "https://github.com/delicjasmin",
    label: "github.com/delicjasmin",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/delic-jasmin/",
    label: "linkedin.com/in/delic-jasmin",
    external: true,
  },
];

function ContactDetails() {
  return (
    <Document>
      <h1 className="text-base font-bold">Write anytime</h1>
      <p>
        Hiring, building something together, or just saying hello: any of those
        is a good reason to reach out! Use any of the options below that suits
        you best, and I&apos;ll get back to you as soon as I can.
      </p>
      <p>Jasmin Delić · Tuzla, Bosnia and Herzegovina</p>
      <h2 className="text-[13px] font-bold">How to reach me</h2>
      {contactLinks.map((link) => (
        <p key={link.href}>
          <TextLink href={link.href} external={link.external}>
            {link.label}
          </TextLink>
        </p>
      ))}
    </Document>
  );
}

function ProjectPage({
  href,
  summary,
  audience,
  children,
}: {
  href: string;
  summary: string;
  audience: string;
  children?: ReactNode;
}) {
  return (
    <AppPage href={href}>
      <h1 className="text-base font-bold">How it works</h1>
      <p>{summary}</p>
      <h2 className="text-[13px] font-bold">Who it&apos;s for</h2>
      <p>{audience}</p>
      {children}
    </AppPage>
  );
}

function QuizDescription() {
  return (
    <ProjectPage
      href="https://quiz.jasmindelic.com"
      summary="Upload a PDF of a book, lecture notes, a textbook, or a study guide and get a quiz. Choose multiple choice, true/false, or a mixed questions, adjust difficulty and number of questions, then quiz yourself immediately."
      audience="It is for trivia lovers, students or anyone wishing to test their knowledge."
    />
  );
}

function CapitalistDescription() {
  return (
    <ProjectPage
      href="https://capitalist.jasmindelic.com"
      summary="Buy properties, collect rent, and bankrupt your rivals. An original property-trading board game you play in the browser."
      audience="It is for anyone who wants a board game without a box, a board, or a banker."
    >
      <Image
        src="/capitalist-board.jpg"
        alt="A game of Capitalist, with the board, a dice roll of 10, and both players' cash"
        width={1024}
        height={623}
        sizes="(max-width: 704px) calc(100vw - 40px), 648px"
        className="h-auto w-full border border-[#808080]"
      />
    </ProjectPage>
  );
}

function ResearchDescription() {
  return (
    <ProjectPage
      href="https://research.jasmindelic.com"
      summary="Paste a link to a PDF and get a summary. Ask questions about the document and get answers with citations and highlights in the source."
      audience="It is for anyone reading a paper, a report, or a long document who just wants a simple answer paired with a citation and a link to the source."
    />
  );
}

function Prehistorik() {
  return (
    <iframe
      src="https://archive.org/embed/msdos_Prehistorik_2_1993"
      title="Prehistorik 2"
      className="block h-[min(480px,calc(100dvh-120px))] w-full border-0 bg-black"
      allow="fullscreen; autoplay"
    />
  );
}

function ReadmeDescription() {
  return (
    <Document>
      <h1 className="text-base font-bold">Welcome</h1>
      <p>
        Hello there, come on in! I&apos;m Jasmin, and this is my slice of the
        internet.
      </p>
      <h2 className="text-[13px] font-bold">Why a desktop</h2>
      <p>
        The interface is a tribute to the little system where it all started. I
        wrote my first line of code in QBasic, and sunk many hours into
        Prehistorik 2 (which I&apos;ve included here, in case someone wants to
        go clubbing). Hoping to write code that is impactful and long living as
        the software that welcomed me.
      </p>
      <h2 className="text-[13px] font-bold">Have a look</h2>
      <p>
        Feel free to browse around. If you find anything you like, I&apos;m
        ready to hear your thoughts!
      </p>
    </Document>
  );
}

const programs: Record<ProgramId, Program> = {
  resume: {
    title: "Resume",
    position: { x: 96, y: 16 },
    icon: <Awfxcg321303 variant="32x32_4" />,
    frame: 560,
    content: (
      <Document>
        <Resume />
      </Document>
    ),
  },
  contact: {
    title: "Contact",
    position: { x: 184, y: 88 },
    icon: <Progman26 variant="32x32_4" />,
    content: <ContactDetails />,
  },
  quiz: {
    title: "Quiz Generator",
    position: { x: 120, y: 40 },
    icon: <QuizIcon size={32} />,
    content: <QuizDescription />,
  },
  capitalist: {
    title: "Capitalist Board Game",
    position: { x: 0, y: 0 },
    icon: <CapitalistIcon size={32} />,
    frame: 680,
    centerX: true,
    content: <CapitalistDescription />,
  },
  research: {
    title: "Ask a PDF",
    position: { x: 192, y: 104 },
    icon: <ResearchIcon size={32} />,
    content: <ResearchDescription />,
  },
  prehistorik: {
    title: "Prehistorik 2",
    position: { x: 0, y: 0 },
    icon: <MsDos variant="32x32_32" />,
    frame: 720,
    centerX: true,
    content: <Prehistorik />,
  },
  readme: {
    title: "Readme.txt",
    icon: <Notepad variant="32x32_4" />,
    content: <ReadmeDescription />,
  },
};

const startMenu = [
  "resume",
  "contact",
  "divider",
  "quiz",
  "capitalist",
  "research",
  "divider",
  "prehistorik",
  "readme",
] as const satisfies readonly (ProgramId | "divider")[];

const desktopIds = startMenu.filter(
  (entry): entry is ProgramId => entry !== "divider" && entry !== "readme",
);

export default function Desktop() {
  const [open, setOpen] = useState<ProgramId[]>(["readme"]);
  const [selected, setSelected] = useState<ProgramId | null>(null);
  const [theme, setTheme] = useState<ThemeChoice>(readThemeChoice);
  const [canPlay, setCanPlay] = useState(
    () => window.matchMedia(DESKTOP_PLAY).matches,
  );
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      const menu = document.querySelector("ul.start-menu");
      if (!menu) return;

      const target = event.target;
      if (!(target instanceof Node) || menu.contains(target)) return;

      const start = document.querySelector(".taskbar > button");
      if (start?.contains(target)) return;

      if (menu.parentElement instanceof HTMLElement) {
        menu.parentElement.click();
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_PLAY);
    const update = () => {
      setCanPlay(query.matches);
      if (!query.matches) {
        setOpen((current) =>
          current.includes("prehistorik")
            ? current.filter((item) => item !== "prehistorik")
            : current,
        );
      }
    };
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  function openProgram(id: ProgramId) {
    if (id === "prehistorik" && !canPlay) {
      return;
    }
    setSelected(id);
    setOpen((current) => (current.includes(id) ? current : [...current, id]));
  }

  function closeProgram(id: ProgramId) {
    setOpen((current) => current.filter((item) => item !== id));
  }

  return (
    <main className="min-h-dvh pb-12">
      <style>{`
        div.draggable {
          align-items: center;
          height: 24px;
          padding: 4px;
        }
        ul.start-menu {
          width: 220px;
        }
        ul.start-menu > li:has(svg) {
          padding-block: 4px;
        }
        .taskbar button svg {
          margin-top: 0;
        }
        .app-window > .draggable {
          flex-shrink: 0;
        }
        html[data-theme="dark"] .app-window .draggable button img {
          filter: invert(1);
        }
        .window-body {
          min-height: 0;
          overflow: auto;
        }
      `}</style>
      <TaskBar
        className="taskbar"
        list={
          <List className="start-menu">
            {startMenu.map((entry, index) => {
              if (entry === "divider") return <List.Divider key={index} />;

              if (entry === "prehistorik" && !canPlay) return null;

              const program = programs[entry];

              return (
                <List.Item
                  key={entry}
                  icon={program.icon}
                  onClick={() => openProgram(entry)}
                >
                  {program.title}
                </List.Item>
              );
            })}
            <List.Divider />
            <List.Item
              icon={<ThemeIcon theme={theme === "dark" ? "light" : "dark"} />}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "Light theme" : "Dark theme"}
            </List.Item>
          </List>
        }
      />
      <div className="flex w-fit flex-col gap-4 p-3">
        {desktopIds.map((id) => {
          if (id === "prehistorik" && !canPlay) return null;

          const program = programs[id];
          const isSelected = selected === id;

          return (
            <button
              key={id}
              type="button"
              className={`flex w-20 touch-manipulation flex-col items-center gap-1 px-1 py-1 text-center text-[11px] leading-tight text-white ${
                isSelected ? "bg-[#000080]" : "[text-shadow:1px_1px_0_#000]"
              }`}
              onClick={() => {
                const tapped = window.matchMedia("(pointer: coarse)").matches;
                if (tapped || selected === id) {
                  openProgram(id);
                } else {
                  setSelected(id);
                }
              }}
              onDoubleClick={() => openProgram(id)}
            >
              {program.icon}
              {program.title}
            </button>
          );
        })}
      </div>

      {open.map((id) => {
        const program = programs[id];

        return (
          <Modal
            key={id}
            id={id}
            className="app-window"
            title={program.title}
            icon={program.icon}
            dragOptions={{
              defaultPosition: { x: 0, y: 0 },
            }}
            style={windowFrame(id)}
            titleBarOptions={[
              <Modal.Minimize key="minimize" />,
              <TitleBar.Close key="close" onClick={() => closeProgram(id)} />,
            ]}
          >
            <Modal.Content className="window-body">
              {program.content}
            </Modal.Content>
          </Modal>
        );
      })}
    </main>
  );
}
