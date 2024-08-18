/* import {
  AntDesignLogo,
  FigmaLogo,
  NotionLogo,
} from '@/app/projects/[slug]/components/illustrations' */

type ProjectType = {
  title: string
  summary?: string
  duration: string
  company: string
  bannerImage: { path: string; alt: string }
  published: boolean
  slug: string
  descriptors: { label: string; value: string }[] | []
  areas: string
  motivation?: React.ReactNode | string
  approach?: React.ReactNode | string
  conclusion?: React.ReactNode
  tools?: { illustration: React.ReactNode; link?: string }[]
}

const projects: ProjectType[] = [
  {
    title: 'Gamified bug resolution',
    summary:
      'Opening up for transparent communication about issue resolution across teams while encouraging gamification and a sense of success for developers',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '/images/system_health-banner.svg', alt: '' },
    published: false,
    slug: 'gamified-bug-resolution',
    areas: 'Ui design',
    descriptors: [
      { label: 'Areas', value: 'Design sprint, Ui design' },
      { label: 'Company', value: 'Volvo Cars' },
      { label: 'Role', value: 'UX designer' },
    ],
    motivation: (
      <p>
        This project took place during a quarterly 2-day innovation sprint,
        inspired by managements requests for my development team to give
        estimations on issue resolution turnover time. Since a combination of
        factors, ranging from complexity and severity of the bugs, to delays in
        user responses, made it difficult for the team to give a real
        estimation, I designed a mock-up to improve cross-team relationships and
        restore developers' sense of agency and joy in their work.
      </p>
    ),
    approach: (
      <>
        <p>
          Given the tight timeline, my focus was on defining the need and a
          feasible approach rather than perfecting the design. From some shorter
          discussions with DevOps and the product owner of our team, I came up
          with these user stories:
        </p>

        <ul>
          <li>
            As a manager, I want to get insights on how many bugs are reported
            and resolved over time, so that I can get an indication on system
            stability and address recourse needs.
          </li>
          <li>
            As a DevOps engineer, I want to see when users are active in the
            system, so that I can plan maintenance events in production that
            impact the least amount users.
          </li>
          <li>
            As a DevOps engineer, I want to see when different user groups are
            likely to use specific system pages, so that I can plan maintenance
            events in production for those pages around their key users
            activities.
          </li>
          <li>
            As a product owner, I want to have an overview of active users on
            different app pages, categorised by user group and region, so that I
            can analyse user trends in the system.
          </li>
          <li>
            As a daily user, I want to have access to bugs that have been
            reported by other users, so that I can find out whether an issue I'm
            facing has already been reported.
          </li>
          <li>
            As a daily user, I want to see the status of reported system bugs,
            so that I can see when something I've been having a problem with has
            been fixed.
          </li>
        </ul>
        <p>
          From this, I identified key user archetypes who would benefit from the
          design:
        </p>
        <ul>
          <li>
            DevOps: the spider in the who who handles all intake,
            prioritisation, and resolution of bugs.
          </li>
          <li>
            Product owner or UX designer: someone who can utilise the user
            activity insights to make guide improvements to the system.
          </li>
          <li>
            Daily user: one out of 400 different people who use the system in
            their daily work lives, from several different time zones.
          </li>
          <li>
            Manager: a person who can allocate resources to support the team in
            order to improve the system health statistics over time.
          </li>
        </ul>

        <p>
          I then did an audit of the functionality that already exists in the
          system today, in order to see which needs were already met and if
          there were any opportunities or blockers to move forward. The current
          user activity tracking is buried in a nested table accessible only to
          admins. It is not possible to filter or sort the table, which would
          contain thousands of records. However, it is possible to export the
          data to Excel whenever there's a need for further investigation.
          Without a UI search function, the table is nearly unusable beyond the
          first few rows, making manual data review impractical and impossibly
          time consuming.
        </p>
        <img
          src={'/images/system_health-before.svg'}
          alt={'Mock-up of what the legacy system looks like.'}
        />
        <p>To summarise, here are the key pain points:</p>

        <ul>
          <li>There is no way to filter the table directly from the UI.</li>
          <li>
            There is no visual overview. You have to export data and create an
            external graph to scan user activity patterns.
          </li>
          <li>
            The amount of data on the page will lead to a cognitive overload for
            someone who is just there to get an overview.
          </li>
          <li>
            There is no way to see which groups of users visit which pages. All
            users are viewed the same in the system.
          </li>
          <li>
            It's unclear what the use case for the existing Ui is, other than
            perhaps that someone asked for it to be built years ago but didn't
            give any specifications about what they wanted.
          </li>
        </ul>

        <p>
          To elaborate on the last pain point, working as a developer in a big
          corporation is not always easy on an interpersonal level. You often
          find yourself making compromises to meet deadlines. Also, lot of the
          time you and your stakeholders speak very different languages - one
          highly logical and technical and another motivated by KPIs' and return
          on investment.
        </p>

        <p>
          Given the pressure a lot of corporate software engineers are all too
          familiar with, once I had gathered all the ground work, my goal for
          the project became to focus on positive and encouraging UX writing,
          and how to instill a sense of success by celebrating small wins.
        </p>

        {/* TODO: insert "3 days bug free!" image here */}

        <p>
          I took inspiration from how Github (a platform used by many developers
          to store and share their code) visualised frequency of code
          contributions to create a grid that uses color to show to how fast
          bugs were reported and resolved over the current year. This familiar
          design aims to foster ownership while enabling transparent discussions
          with stakeholders about system health priorities.
        </p>

        {/* TODO: insert "no bugs on this day" grid zoom in image here */}

        <p>
          The grid creates a scoreboard, where the the positive copywriting
          combined with the visualisation might encourage people to view solving
          bugs as a game, where daily users and DevOps can get shared sense of
          community around improving the system together.
        </p>

        {/* TODO: insert 'bug resolution' sub-page image here */}

        <p>
          On a more utilitarian level, while not all users should have access to
          the system's activity logs, the 'User activity' and 'Bug resolution'
          content could be grouped together in the information architecture and
          page navigation since it was the mental model presented by the core
          stakeholders (DevOps) when they mind-mapped their requirements. It is
          also not true that an administrator can change anything in the user
          activity log the way that they may change other system settings, which
          means that the contents location may not have been exactly right to
          begin with. Most importantly though, the change in location - bringing
          the page to the top level of the application menu, hopes to encourage
          users to more actively engage with this type of data since it is now
          easier to reach.
        </p>

        {/* TODO: insert 'user activity' sub-page image here */}

        <p>
          Since the new version of the ‘User activity’ sub-page (accessible by
          the product team and DevOps - and hidden from the daily user by
          conditionally removing the tabs in the header of the page) now
          contains a graph that visualises user activities on top of the access
          log data, the team has more power to independently plan maintenance
          events for different system pages, since they no longer have to send
          out mass emails and negotiate with different business teams about the
          best time to impact production. This should furthermore improve the
          relationship between stakeholders and DevOps over time, as there will
          be less reason to contact each other about things that carry a
          negative connotation.
        </p>

        {/* TODO: insert user activity graph image here */}
      </>
    ),
    conclusion: (
      <>
        <p>
          The project was voted second favourite at the end of the innovation
          sprint, which was personally encouraging and highlighted a shared
          experience among developers in large organisations like Volvo Cars.
          This recognition underscored a crucial point: while commercial
          applications offer clear insights into system status and health,
          internal business tools often lack this level of transparency,
          especially when the end-user and purchaser are not the same person.
        </p>
        <p>
          By prioritising visibility and transparency in internal business
          software, we can foster a more solution-oriented culture that bridges
          the gap between DevOps and business. The design presented in this
          project not only enhances collaboration and engagement across teams
          but also lays the groundwork for a healthier, more productive system
          environment where success is celebrated collectively.
        </p>
      </>
    ),
    /* tools: [
      { illustration: <FigmaLogo />, link: 'https://www.figma.com/' },
      { illustration: <NotionLogo />, link: 'https://www.notion.so/' },
      { illustration: <AntDesignLogo />, link: 'https://ant.design/' },
    ], */
  },
  {
    title: 'Streamlined supply chain management',
    summary: '',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: {
      path: '/images/supply_chain-work_item.svg',
      alt: '',
    },
    published: false,
    slug: 'streamlined-supply-chain-management',
    areas: 'Research, strategy & UX design',
    descriptors: [
      {
        label: 'Areas',
        value: 'Research, strategy & UX design',
      },
      { label: 'Company', value: 'Volvo Cars' },
      { label: 'Role', value: 'Lead UX designer' },
    ],
  },
  {
    title: 'Component library and design system maintenance',
    summary: '',
    duration: '2024',
    company: 'Volvo Cars',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'complex-component-and-design-system-maintenance',
    areas: 'Mentoring & Ui design',
    descriptors: [],
  },
  {
    title: 'Wholly Health',
    summary: '',
    duration: '2024',
    company: 'Wholly Health',
    bannerImage: { path: '', alt: '' },
    published: false,
    slug: 'wholly-health',
    areas: 'Mentoring & Ui design',
    descriptors: [],
  },
]

export { projects, type ProjectType }
