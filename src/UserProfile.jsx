import style from './css/UserProfile.module.css'
function UserProfile() {
  return (
    <div>
      <div className={style.card}>
        <img className={style.img}  src="https://img.freepik.com/premium-vector/laptop-coding-concept-web-developer-programming-laptop-screen-code-illustration_100456-1752.jpg"alt="Developer"/>
        <div className={style.textWrap}>
          <h4>Anil Sidhu</h4>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
