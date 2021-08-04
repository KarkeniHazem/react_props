import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
    return (
        <div>
            <h1> Hello {props.name}</h1>
            <h2> Working as {props.profession}</h2>
            <h2> Bio : {props.bio}</h2>
            <img src={props.source}  />

        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string
  };

  Profile.defaultProps = {
    name: 'sethmi el hamdi',
    profession:' nattar',
    bio:'10 rabtiyet'
  };

export default Profile;
