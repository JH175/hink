import Project from '@/components/Project';
import Skill from '@/components/Skill';
import SkillRow from '@/components/SkillRow';

export default function Home() {
  return (
    <main>
      <div
        className='p-10 flex flex-col gap-5 justify-center items-center'
        id='about'
      >
        <h3 className='text-lg'>About</h3>
        <p className='indent-5'>
          My coding journey began in 2019 when working to build an MVP for a
          SaaS idea. I dedicated myself to learning HTML, CSS, and JavaScript,
          and quickly became hooked. Soon, I began working with databases and
          APIs to build full-stack applications with libraries and frameworks
          such as React and Next.js. Beyond coding, my professional background
          includes over six years in Army special operations as a team leader
          and medic. I thrive in challenging environments that demand
          creativity, audacity, and teamwork. I have a keen interest in
          entrepreneurship I{"'"}m always seeking opportunities to collaborate
          with co-founders and other developers to build something amazing.
        </p>
      </div>
      <div
        className='p-10 flex flex-col items-center justify-center gap-5'
        id='skills'
      >
        <h3 className='text-lg'>Skills</h3>
        <div className='flex flex-col items-center'>
          <SkillRow>
            <Skill name='JavaScript' />,
            <Skill name='React.js' />,
            <Skill name='Next.js' />
          </SkillRow>
          <SkillRow>
            <Skill name='React Native' />,
            <Skill name='Expo' />
          </SkillRow>
          <SkillRow>
            <Skill name='REST APIs' />,
            <Skill name='Databases' />
          </SkillRow>
          <SkillRow>
            <Skill name='MySQL' />,
            <Skill name='PostgreSQL' />,
            <Skill name='Prisma ORM' />
          </SkillRow>
          <SkillRow>
            <Skill name='HTML' />,
            <Skill name='CSS' />,
            <Skill name='Sass' />,
            <Skill name='Tailwind CSS' />
          </SkillRow>
        </div>
      </div>
      <div
        className='p-10 flex flex-col items-center justify-center gap-5'
        id='projects'
      >
        <h3 className='text-lg'>Projects</h3>
        <div className='flex flex-col items-center gap-5'>
          <Project
            name='OpsCommon'
            description='OpsCommon allows organizations to synchronize operational information onto a single dashboard to track teams, tasks, assets, and more.'
            stack={[
              'React,',
              'Next.js,',
              'MySQL,',
              'Prisma,',
              'Tailwind CSS,',
              'Clerk Auth,',
              'Mapbox',
            ]}
            githubLink=''
            projectLink='https://www.opscommon.com/'
          />
          <Project
            name='Casualty.Live'
            description='Casualty.Live enables lightweight & informed telemedicine by allowing users to send and trend patient vitals with a link.'
            stack={[
              'React,',
              'Next.js,',
              'MySQL,',
              'Prisma,',
              'Tailwind CSS,',
              'Vitest,',
              'Recharts,',
              'TanStack Query',
            ]}
            githubLink='https://github.com/JH175/casualty.live'
            projectLink='https://casualty-live.vercel.app/'
          />
        </div>
      </div>
      <div
        className='p-10 flex flex-col items-center justify-center gap-5'
        id='contact'
      >
        <h3 className='text-lg'>Contact</h3>
        <p className='text-lg'>jake@hink.dev</p>
        <p className='text-lg'>
          Book a meeting:{' '}
          <a href='https://calendly.com/jh175/30min' target='_blank'>
            Calendly
          </a>
        </p>
      </div>
    </main>
  );
}
