import Image from 'next/image';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      {/* Heading */}
      <div className='hero items-center  lg:items-start p-8 justify-between'>
        <div>
          <h2 className='font-poppins font-light text-4xl md:text-6xl'>
            Welcome
          </h2>
          <h1 className=' text-6xl md:text-8xl'>I’m Luis Teles</h1>
          <p className='font-poppins font-light text-2xl md:text-4xl'>
            Student, condign since 2019{' '}
          </p>
        </div>

        <div className='bg-white rounded-full w-[360px] h-[360px]'>
          <Image src='' alt='Luis Teles' width={360} height={360} />
        </div>
      </div>

      {/* About */}
      <div className='flex flex-col sm:flex-row justify-between lg:px-10'>
        <div className='sm:w-[700px] p-8'>
          <h1 className='text-lg font-semibold'>About</h1>
          <p>
            Hello, I'm Luis, a front-end programmer dedicated to continuous
            improvement and staying at the forefront of technology trends.
            Currently, I'm honing my JavaScript skills with the Next.js
            framework. I'm also actively seeking opportunities to collaborate
            with forward-thinking companies or partners who share my passion for
            learning and growth.
          </p>
        </div>

        <div className='sm:w-[700px] flex flex-col p-8'>
          <h1>My Skills</h1>
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>CSS3</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>

      {/* About - Next Steps */}
      <div className='flex flex-col sm:flex-row justify-between'>
        <div className='p-8 sm:w-[700px]'>
          <h1>Languages</h1>
          <p>Portuguese: Native speaker.</p>
          <p>English: Proficient.</p>
          <p>Deutsch: Initial stages</p>
        </div>
        <div className='p-8 sm:w-[700px]'>
          <h1>Next Steps</h1>
          <p>
            I'm currently immersed in a Next.js project with a primary focus on
            AI integration. My long-term goal is to persist in working on
            AI-integrated projects while actively pursuing a job opportunity in
            the field.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className=''>
        <h1 className='font-semibold text-xl pl-6'>Projects</h1>
        <div className='m-5 bg-slate-400 p-6 rounded-lg'>
          <h2 className='font-semibold text-lg'>Made with next.js</h2>
          <div className='flex justify-center align-middle bg-slate-500 h-96 rounded-lg'>
            IMG
          </div>
          <p className='text-center text-sm'>
            Promptopia is a project originally developed by JavaScript Mastery
            on YouTube. I seized the opportunity to contribute my own unique
            coding perspective to the project.
          </p>
        </div>
      </div>
    </main>
  );
}
