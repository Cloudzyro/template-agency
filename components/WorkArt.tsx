import type { Project } from "@/data/work";

// Each case study is shown as a drawing of the real deliverable, made in SVG,
// so the template ships with no photos to license. Swap this for <img> tags
// with your own project photos in public/ when you have them.

const F = "'Archivo Variable', Archivo, system-ui, sans-serif";
const wide = { fontFamily: F, fontStretch: "125%" } as const;
const narrow = { fontFamily: F, fontStretch: "75%" } as const;
const body = { fontFamily: F } as const;

type Props = { project: Project; className?: string; label?: string; fit?: boolean };

// The color behind each drawing, so a wide frame can show the whole object.
export function canvasColor(p: Project) {
  return p.art.kind === "sign" ? p.art.paper : p.art.ground;
}

export default function WorkArt({ project, className, label, fit }: Props) {
  const { kind } = project.art;
  const alt = label ?? artAlt(project);
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label={alt}
      className={className}
      overflow={fit ? "visible" : "hidden"}
      preserveAspectRatio={fit ? "xMidYMid meet" : "xMidYMid slice"}
    >
      {kind === "sign" && <Sign {...project.art} />}
      {kind === "package" && <Package {...project.art} />}
      {kind === "app" && <App {...project.art} />}
      {kind === "poster" && <Poster {...project.art} />}
      {kind === "book" && <Book {...project.art} />}
      {kind === "web" && <Web {...project.art} />}
    </svg>
  );
}

export function artAlt(p: Project) {
  const what: Record<string, string> = {
    sign: "a dock sign showing a route number and destination",
    package: "a coffee bag with a colored origin band and a taste scale",
    app: "a phone showing a three-step clinic booking screen",
    poster: "a concert poster set on a twelve-column grid",
    book: "a paper shop bag and a staff-pick bookmark",
    web: "a website page with a plain rates table",
  };
  return `${p.client}: ${what[p.art.kind]}`;
}

type C = Project["art"];

function Sign({ ground, ink, mark, paper }: C) {
  return (
    <g>
      <rect width="800" height="600" fill={paper} />
      {/* water and far shore */}
      <rect x="-2000" y="430" width="4800" height="170" fill={ground} opacity="0.16" />
      <path d="M-2000 430 H2800" stroke={ground} strokeOpacity="0.3" />
      <path d="M-2000 470 H2800 M-2000 515 H2800 M-2000 565 H2800" stroke={ground} strokeOpacity="0.12" />
      <path d="M520 430 l40 -14 l60 4 l50 -10 l130 20 Z" fill={ground} opacity="0.18" />
      {/* posts */}
      <rect x="236" y="300" width="14" height="300" fill="#2a3a3f" />
      <rect x="550" y="300" width="14" height="300" fill="#2a3a3f" />
      {/* panel */}
      <rect x="150" y="96" width="500" height="268" rx="6" fill={ground} />
      <rect x="150" y="96" width="500" height="268" rx="6" fill="none" stroke="#000" strokeOpacity="0.15" />
      <circle cx="252" cy="198" r="64" fill={mark} />
      <text x="252" y="232" textAnchor="middle" fontSize="98" fontWeight="600" fill={ground} style={wide}>
        2
      </text>
      <text x="340" y="186" fontSize="36" fontWeight="500" fill={ink} style={wide}>
        Presque Isle
      </text>
      <text x="342" y="226" fontSize="22" fill={ink} opacity="0.8" style={body}>
        Isla Presque
      </text>
      <path d="M190 292 H610" stroke={ink} strokeOpacity="0.25" />
      <text x="190" y="334" fontSize="22" fontWeight="500" fill={ink} style={narrow}>
        Gate B
      </text>
      <text x="610" y="334" textAnchor="end" fontSize="22" fill={ink} opacity="0.8" style={narrow}>
        Every 30 min, first boat 6:10 am
      </text>
    </g>
  );
}

function Package({ ground, ink, mark, paper }: C) {
  return (
    <g>
      <rect width="800" height="600" fill={ground} />
      <rect x="-2000" y="510" width="4800" height="90" fill="#000" opacity="0.06" />
      {/* shadow */}
      <ellipse cx="400" cy="532" rx="170" ry="14" fill="#000" opacity="0.14" />
      {/* bag */}
      <path d="M262 112 H538 L548 528 H252 Z" fill="#c9a77d" />
      <path d="M262 112 H538 L540 150 H260 Z" fill="#b8925f" />
      <path d="M268 100 H532 V118 H268 Z" fill="#a88252" />
      <rect x="256" y="300" width="290" height="70" fill={mark} />
      <rect x="290" y="176" width="220" height="104" fill={paper} />
      <text x="400" y="232" textAnchor="middle" fontSize="40" fontWeight="500" fill={ink} style={wide}>
        Halden
      </text>
      <text x="400" y="262" textAnchor="middle" fontSize="15" fill={ink} opacity="0.75" style={narrow}>
        Coffee roasters, Pittsburgh
      </text>
      <text x="400" y="344" textAnchor="middle" fontSize="26" fontWeight="500" fill={paper} style={narrow}>
        Huila, Colombia
      </text>
      <rect x="290" y="392" width="220" height="100" fill={paper} />
      <text x="306" y="420" fontSize="14" fill={ink} opacity="0.7" style={narrow}>
        Bright
      </text>
      <text x="494" y="420" textAnchor="end" fontSize="14" fill={ink} opacity="0.7" style={narrow}>
        Deep
      </text>
      <path d="M306 446 H494" stroke={ink} strokeWidth="2" />
      {[306, 353, 400, 447, 494].map((x) => (
        <path key={x} d={`M${x} 440 V452`} stroke={ink} strokeWidth="2" />
      ))}
      <circle cx="353" cy="446" r="9" fill={mark} />
      <text x="306" y="478" fontSize="14" fill={ink} style={body}>
        Red apple, panela, cocoa
      </text>
    </g>
  );
}

function App({ ground, ink, mark, paper }: C) {
  const times = ["8:20", "9:00", "9:40", "10:20", "11:00", "1:40"];
  return (
    <g>
      <rect width="800" height="600" fill={ground} />
      <rect x="282" y="40" width="236" height="500" rx="36" fill="#1b1f1d" />
      <rect x="294" y="52" width="212" height="476" rx="26" fill={paper} />
      <rect x="370" y="62" width="60" height="12" rx="6" fill="#1b1f1d" />
      <text x="314" y="112" fontSize="13" fill={ink} opacity="0.6" style={body}>
        Step 2 of 3
      </text>
      <text x="314" y="140" fontSize="21" fontWeight="500" fill={ink} style={body}>
        Pick a time
      </text>
      <text x="314" y="166" fontSize="13" fill={ink} opacity="0.7" style={body}>
        Riverside Clinic, Tuesday
      </text>
      {times.map((t, i) => {
        const x = 314 + (i % 3) * 60;
        const y = 188 + Math.floor(i / 3) * 52;
        const on = t === "9:40";
        return (
          <g key={t}>
            <rect
              x={x}
              y={y}
              width="52"
              height="40"
              rx="8"
              fill={on ? mark : paper}
              stroke={on ? mark : ink}
              strokeOpacity={on ? 1 : 0.2}
            />
            <text x={x + 26} y={y + 25} textAnchor="middle" fontSize="14" fill={on ? "#fff" : ink} style={body}>
              {t}
            </text>
          </g>
        );
      })}
      <path d="M314 308 H486" stroke={ink} strokeOpacity="0.12" />
      <text x="314" y="336" fontSize="13" fill={ink} opacity="0.6" style={body}>
        Reason
      </text>
      <text x="314" y="358" fontSize="15" fill={ink} style={body}>
        Check-up, adult
      </text>
      <text x="314" y="392" fontSize="13" fill={ink} opacity="0.6" style={body}>
        Language
      </text>
      <text x="314" y="414" fontSize="15" fill={ink} style={body}>
        English
      </text>
      <rect x="314" y="456" width="172" height="44" rx="10" fill={ink} />
      <text x="400" y="484" textAnchor="middle" fontSize="15" fontWeight="500" fill="#fff" style={body}>
        Book 9:40 am
      </text>
    </g>
  );
}

function Poster({ ground, ink, mark, paper }: C) {
  return (
    <g>
      <rect width="800" height="600" fill={ground} />
      {/* wall */}
      <path d="M0 0 H800 V600 H0 Z" fill="#000" opacity="0.04" />
      <rect x="232" y="30" width="336" height="520" fill={paper} />
      <rect x="232" y="30" width="336" height="520" fill="none" stroke="#000" strokeOpacity="0.08" />
      {/* grid hint */}
      {Array.from({ length: 11 }, (_, i) => (
        <path key={i} d={`M${232 + 28 * (i + 1)} 30 V550`} stroke={ink} strokeOpacity="0.04" />
      ))}
      <text x="256" y="78" fontSize="18" fontWeight="500" fill={ink} style={narrow}>
        Fernhill Music Hall
      </text>
      <text x="544" y="78" textAnchor="end" fontSize="18" fill={ink} style={narrow}>
        Spring 2026
      </text>
      <circle cx="456" cy="230" r="104" fill={mark} />
      <text x="252" y="300" fontSize="118" fontWeight="600" fill={ink} style={wide} letterSpacing="-4">
        14
      </text>
      <text x="256" y="336" fontSize="26" fill={ink} style={narrow}>
        Friday, March
      </text>
      <path d="M256 372 H544" stroke={ink} strokeWidth="3" />
      <text x="256" y="420" fontSize="38" fontWeight="500" fill={ink} style={wide}>
        The Low
      </text>
      <text x="256" y="462" fontSize="38" fontWeight="500" fill={ink} style={wide}>
        Arches
      </text>
      <text x="256" y="522" fontSize="16" fill={ink} style={narrow}>
        Doors 7 pm
      </text>
      <text x="544" y="522" textAnchor="end" fontSize="16" fill={ink} style={narrow}>
        $24, all ages
      </text>
    </g>
  );
}

function Book({ ground, ink, mark, paper }: C) {
  return (
    <g>
      <rect width="800" height="600" fill={ground} />
      <rect x="-2000" y="500" width="4800" height="100" fill="#000" opacity="0.18" />
      {/* bag */}
      <path d="M188 160 H468 L480 520 H176 Z" fill={paper} />
      <path d="M188 160 L176 520 H192 L200 160 Z" fill="#000" opacity="0.05" />
      <path d="M268 160 C268 104 388 104 388 160" fill="none" stroke="#cdbf9f" strokeWidth="10" />
      {/* steps mark */}
      <path
        d="M262 380 H298 V350 H334 V320 H370 V290 H406 V380 Z"
        fill={ground}
      />
      <text x="328" y="430" textAnchor="middle" fontSize="30" fontWeight="500" fill={ground} style={wide}>
        Quarry Lane
      </text>
      <text x="328" y="458" textAnchor="middle" fontSize="16" fill={ground} opacity="0.8" style={narrow}>
        Books since 1989, Morgantown
      </text>
      {/* bookmark */}
      <g transform="rotate(8 560 330)">
        <rect x="500" y="130" width="120" height="380" fill={mark} />
        <circle cx="560" cy="160" r="9" fill={ground} />
        <text x="516" y="214" fontSize="15" fill={ink === paper ? "#2a2418" : ink} style={narrow}>
          Staff pick
        </text>
        <text x="516" y="262" fontSize="24" fontWeight="500" fill="#2a2418" style={wide}>
          Read
        </text>
        <text x="516" y="292" fontSize="24" fontWeight="500" fill="#2a2418" style={wide}>
          this
        </text>
        <text x="516" y="322" fontSize="24" fontWeight="500" fill="#2a2418" style={wide}>
          slowly
        </text>
        <path d="M516 350 H604" stroke="#2a2418" strokeOpacity="0.4" />
        <text x="516" y="378" fontSize="14" fill="#2a2418" style={body}>
          Chosen by Eli,
        </text>
        <text x="516" y="398" fontSize="14" fill="#2a2418" style={body}>
          fiction shelf
        </text>
      </g>
    </g>
  );
}

function Web({ ground, ink, mark, paper }: C) {
  const rows = [
    ["12-month certificate", "4.15% APY"],
    ["24-month certificate", "3.90% APY"],
    ["Savings, any balance", "1.25% APY"],
    ["New car loan, from", "5.49% APR"],
    ["Home equity line, from", "7.10% APR"],
  ];
  return (
    <g>
      <rect width="800" height="600" fill={ground} />
      <rect x="90" y="60" width="620" height="480" rx="12" fill={paper} />
      <rect x="90" y="60" width="620" height="480" rx="12" fill="none" stroke={ink} strokeOpacity="0.1" />
      <path d="M90 100 H710" stroke={ink} strokeOpacity="0.1" />
      {[112, 130, 148].map((x) => (
        <circle key={x} cx={x} cy="80" r="5" fill={ink} opacity="0.15" />
      ))}
      <text x="126" y="146" fontSize="20" fontWeight="500" fill={ink} style={wide}>
        Brightwater
      </text>
      {["Accounts", "Loans", "Rates", "Branches"].map((l, i) => (
        <text key={l} x={420 + i * 70} y="146" fontSize="13" fill={ink} opacity={l === "Rates" ? 1 : 0.65} style={body}>
          {l}
        </text>
      ))}
      <path d="M560 154 H592" stroke={mark} strokeWidth="2" />
      <text x="126" y="214" fontSize="34" fontWeight="500" fill={ink} style={wide}>
        Today&apos;s rates
      </text>
      <text x="126" y="244" fontSize="15" fill={ink} opacity="0.7" style={body}>
        Updated this morning at 8:00. The same rates you see in the branch.
      </text>
      {rows.map(([name, rate], i) => {
        const y = 290 + i * 46;
        return (
          <g key={name}>
            <path d={`M126 ${y - 14} H674`} stroke={ink} strokeOpacity="0.1" />
            <text x="126" y={y + 12} fontSize="16" fill={ink} style={body}>
              {name}
            </text>
            <text x="674" y={y + 12} textAnchor="end" fontSize="17" fontWeight="500" fill={ink} style={narrow}>
              {rate}
            </text>
          </g>
        );
      })}
    </g>
  );
}
