import type { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiAndroid,
  SiFlutter,
  SiDart,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiDocker,
  SiOpenai,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';

const TECH: { icon: IconType; name: string }[] = [
  { icon: SiReact, name: 'React' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiPhp, name: 'PHP' },
  { icon: FaJava, name: 'Java' },
  { icon: SiPython, name: 'Python' },
  { icon: SiAndroid, name: 'Android' },
  { icon: TbBrandReactNative, name: 'React Native' },
  { icon: SiFlutter, name: 'Flutter' },
  { icon: SiDart, name: 'Dart' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiFirebase, name: 'Firebase' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiOpenai, name: 'OpenAI' },
];

const StackSection = () => (
  <section className="border-b border-border py-12">
    <div className="container">
      <div className="flex justify-center">
        <span className="kicker">Tecnologías que usamos a diario</span>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {TECH.map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <t.icon className="h-5 w-5" />
            <span className="text-sm font-medium">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StackSection;
