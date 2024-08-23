import { nanoid } from 'nanoid'

import { UserStoryCard } from '@/components'

import styles from './ApproachSection.module.scss'

const ApproachSection: React.FC = () => {
  const userStories = [
    {
      user: 'manager,',
      activity:
        'get insights on how many bugs are reported and resolved over time,',
      goal: 'I can get an indication on system stability and address recourse needs',
    },
    {
      user: 'DevOps engineer',
      activity: 'see when users are active in the system,',
      goal: ' so that I can plan maintenance events in production that impact the least amount users.',
    },
    {
      user: 'DevOps engineer,',
      activity:
        'see when different user groups are likely to use specific system pages,',
      goal: 'so that I can plan maintenance events in production for those pages around their key users activities.',
    },
    {
      user: 'product owner,',
      activity:
        'have an overview of active users on different app pages, categorised by user group and region,',
      goal: 'I can analyse user trends in the system.',
    },
    {
      user: 'daily user,',
      activity: 'have access to bugs that have been reported by other users,',
      goal: `so that I can find out whether an issue I'm facing has already been reported.`,
    },
    {
      user: 'daily user,',
      activity: 'I want to see the status of reported system bugs,',
      goal: `I can see when something I've been having a problem with has been fixed.`,
    },
  ]

  const archetypes = [
    {
      archetype: 'DevOps',
      description:
        'the spider in the who who handles all intake, prioritisation, and resolution of bugs',
    },
    {
      archetype: 'Product owner or UX designer',
      description:
        'someone who can utilise the user activity insights to make guide improvements to the system',
    },
    {
      archetype: 'Daily user',
      description:
        'one out of 400 different people who use the system in their daily work lives, from several different time zones.',
    },
    {
      archetype: 'Manager',
      description:
        'a person who can allocate resources to support the team in order to improve the system health statistics over time.',
    },
  ]

  const painPoints = [
    'There is no way to filter the table directly from the UI.',
    'There is no visual overview. You have to export data and create an external graph to scan user activity patterns.',
    'The amount of data on the page will lead to a cognitive overload for someone who is just there to get an overview.',
    'There is no way to see which groups of users visit which pages. All users are viewed the same in the system.',
    `It's unclear what the use case for the existing Ui is, other than perhaps that someone asked for it to be built years ago but didn't give any specifications about what they wanted.`,
  ]

  return (
    <section className={`layout-section p-section ${styles.frame}`}>
      <div>
        <h2>Approach</h2>

        <p>
          Given the tight timeline, my focus was on defining the need and a
          feasible approach rather than perfecting the design. From some shorter
          discussions with DevOps and the product owner of our team, I came up
          with these user stories:
        </p>
      </div>

      <div className={styles.storiesFrame}>
        {userStories.map(story => (
          <UserStoryCard story={story} key={nanoid()} />
        ))}
      </div>

      <div className={styles.archetypesFrame}>
        <p>
          From this, I identified key user archetypes who would benefit from the
          design:
        </p>

        {archetypes.map(archetype => (
          <p>
            <span>{archetype.archetype}:</span> {archetype.description}
          </p>
        ))}
      </div>

      <p>
        I then did an audit of the functionality that already exists in the
        system today, in order to see which needs were already met and if there
        were any opportunities or blockers to move forward. The current user
        activity tracking is buried in a nested table accessible only to admins.
        It is not possible to filter or sort the table, which would contain
        thousands of records. However, it is possible to export the data to
        Excel whenever there's a need for further investigation. Without a UI
        search function, the table is nearly unusable beyond the first few rows,
        making manual data review impractical and impossibly time consuming.
      </p>

      <img
        src={'/images/system_health-before.svg'}
        alt={'Mock-up of what the legacy system looks like.'}
      />

      <div className={styles.painPointsList}>
        <p>In summary, here are the key pain points:</p>

        <ul>
          {painPoints.map(point => (
            <li key={nanoid()}>{point}</li>
          ))}
        </ul>
      </div>

      <p>
        To elaborate on the last pain point, working as a developer in a big
        corporation is not always easy on an interpersonal level. You often find
        yourself making compromises to meet deadlines. Also, lot of the time you
        and your stakeholders speak very different languages - one highly
        logical and technical and another motivated by KPIs' and return on
        investment.
      </p>

      <p>
        Given the pressure a lot of corporate software engineers are all too
        familiar with, once I had gathered all the ground work, my goal for the
        project became to focus on positive and encouraging UX writing, and how
        to instill a sense of success by celebrating small wins.
      </p>

      <img
        src={'/images/system_health-3_days_bug_free.svg'}
        className={styles.positiveCopy}
      />

      <p>
        I took inspiration from how Github (a platform used by many developers
        to store and share their code) visualised frequency of code
        contributions to create a grid that uses color to show to how fast bugs
        were reported and resolved over the current year. This familiar design
        aims to foster ownership while enabling transparent discussions with
        stakeholders about system health priorities.
      </p>

      <img
        src={'/images/system_health-grid_interaction.svg'}
        className={styles.gridInteraction}
      />

      <p>
        The grid creates a scoreboard, where the the positive copywriting
        combined with the visualisation might encourage people to view solving
        bugs as a game, where daily users and DevOps can get shared sense of
        community around improving the system together.
      </p>

      <img src={'/images/system_health-bug_resolution_overview.svg'} />

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

      <img src={'/images/system_health-user_activity_overview.svg'} />

      <p>
        Since the new version of the ‘User activity’ sub-page (accessible by the
        product team and DevOps - and hidden from the daily user by
        conditionally removing the tabs in the header of the page) now contains
        a graph that visualises user activities on top of the access log data,
        the team has more power to independently plan maintenance events for
        different system pages, since they no longer have to send out mass
        emails and negotiate with different business teams about the best time
        to impact production. This should furthermore improve the relationship
        between stakeholders and DevOps over time, as there will be less reason
        to contact each other about things that carry a negative connotation.
      </p>

      <img src={'/images/system_health-activity_graph.svg'} />
    </section>
  )
}

export default ApproachSection
