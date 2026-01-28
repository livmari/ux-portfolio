import { Blockquote } from '@/app/components'
import {
  UserStoriesSection,
  HeroSection,
  TextSection,
  ImageSection,
} from '@/app/sections'

const project = {
  title:
    'Gamifying bug resolution to create community between DevOps and users',
  image: {
    path: '/images/system-health-overview.svg',
  },
  descriptions: [
    {
      label: 'My role',
      values: ['Design sprint facilitator', 'UX design', 'UI design'],
    },
  ],
  motivation: {
    title: 'Motivation',
    paragraphs: [
      <p>
        This project took place during a quarterly 2-day innovation sprint,
        inspired by managements requests for my development team to give
        estimations on issue resolution turnover time. Since a combination of
        factors, ranging from complexity and severity of the bugs, to delays in
        user responses, made it difficult for the team to give a real
        estimation, I designed a mock-up to improve cross-team relationships and
        restore developers' sense of agency and joy in their work.
      </p>,
    ],
  },
  userStories: [
    {
      user: 'system user,',
      activity: 'have access to bugs that have been reported by other users,',
      goal: `so that I can find out whether an issue I'm facing has already been reported.`,
    },
    {
      user: 'system user',
      activity: 'I want to see the status of reported system bugs,',
      goal: `I can see when something I've been having a problem with has been fixed.`,
    },
    {
      user: 'manager,',
      activity:
        'get insights on how many bugs are reported and resolved over time,',
      goal: 'I can get an indication on system stability and address recourse needs.',
    },
    {
      user: 'DevOps engineer',
      activity: 'see when users are active in the system,',
      goal: 'I can plan maintenance events in production that impact the least amount users.',
    },
    {
      user: 'DevOps engineer,',
      activity:
        'see when different user groups are likely to use specific system pages,',
      goal: 'I can plan maintenance events in production for those pages around their key users activities.',
    },
    {
      user: 'product owner,',
      activity:
        'have an overview of active users on different app pages, categorised by user group and region,',
      goal: 'I can analyse user trends in the system.',
    },
  ],
}

const Project = () => {
  return (
    <main className={'page-layout'}>
      <HeroSection
        title={project.title}
        useCase={'project'}
        year={'2024'}
        company={'Volvo Cars'}
        descriptions={project.descriptions}
        image={project.image}
      />

      <TextSection
        title={project.motivation.title}
        paragraphs={project.motivation.paragraphs}
      />

      <TextSection
        title={'Scope and expectations'}
        paragraphs={[
          <p>
            Given the tight timeline, my focus was on defining the need and a
            feasible approach rather than delivering a pixel perfect design.
            Together with opinions within the DevOps team, and assumptions based
            on previous user interactions, the following highest impact user
            stories were defined.
          </p>,
        ]}
      />

      <UserStoriesSection stories={project.userStories} />

      <TextSection
        title={'User groups'}
        paragraphs={[
          <ul>
            <li>
              <span>DevOps:</span> the spider in the who who handles all intake,
              prioritisation, and resolution of bugs
            </li>
            <li>
              <span>Product owner or UX designer:</span> someone who can utilise
              the user activity insights to make guide improvements to the
              system
            </li>
            <li>
              <span>System user:</span> one out of 400 different people who use
              the system in their daily work lives, from several different time
              zones.
            </li>
            <li>
              <span>Manager:</span> a person who can allocate resources to
              support the team in order to improve the system health statistics
              over time.
            </li>
          </ul>,
        ]}
      />

      <ImageSection path={'/images/admin-audit-screen-print.svg'} />

      <TextSection
        title={'Existing functionality & pain points'}
        paragraphs={[
          <p>
            The existing functionality to monitor user activity is nested under
            three layers of navigation. It is also impossible to filter or sort
            the information without exporting the data to an Excel sheet, which
            would contain potentially thousands of records. This means that,
            realistically, a viewer would only ever interact with the first
            handful of rows before giving up.
          </p>,
          <p>
            Going forward in the design sprint, an important ROI to measure is
            how easy it is to find specific information compared to the previous
            version. Additionally, how might we imrpove the ability to gain
            insights on trends?
          </p>,
        ]}
      />

      <Blockquote
        quote={`We have a conflict between what the users want us to fix and prioritising new features. Sometimes I wish I could be two people at once.`}
        cite={'DevOps team member'}
        isPageSection={true}
      />

      <TextSection title={'Shifting the narrative'} paragraphs={[<p></p>]} />
    </main>
  )
}

export default Project
