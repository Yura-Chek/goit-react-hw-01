import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={css.profile}>
    <div className={css.profileWrapper}>
      <img className={css.profileImg} src={image} alt="User avatar" />
      <p className={css.profileName}>{name}</p>
      <p className={css.profileInf}>@{tag}</p>
      <p className={css.profileInf}>{location}</p>
    </div>
    <ul className={css.profileList}>
      <li className={css.profileItem}>
        <span className={css.profileListInf}>Followers</span>
        <span className={css.profileListInf}>{stats.followers}</span>
      </li>
      <li className={css.profileItem}>
        <span className={css.profileListInf}>Views</span>
        <span className={css.profileListInf}>{stats.views}</span>
      </li>
      <li className={css.profileItem}>
        <span className={css.profileListInf}>Likes</span>
        <span className={css.profileListInf}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;
