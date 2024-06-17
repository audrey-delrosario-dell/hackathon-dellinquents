import './styles/officedIn.css';


const OfficedIn = ({ users }) => {

    return (
      <div>
        <h2>OfficedIn</h2>
        <button className="toggle-btn">toggle</button>
        <div className="user-icons">
            {users.map((user) => (
                <div key={user.name} className="user">
                    <img src={user.profile_pic} alt={user.name} className="user-img"/>
                </div>
            ))}
        </div>
        <div className="bar-chart"></div>
      </div>
    )
  }
  
  export default OfficedIn