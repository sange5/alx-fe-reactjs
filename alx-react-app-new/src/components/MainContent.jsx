import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#eef2f7',
        minHeight: '60vh'
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '16px' }}>
        User Profiles
      </h2>

      <UserProfile name="Alice" age={25} bio="Loves traveling and photography." />
      <UserProfile name="Bob" age={30} bio="Enjoys coding and hiking." />
      <UserProfile name="Charlie" age={28} bio="Passionate about music and art." />
    </main>
  );
}

export default MainContent;
