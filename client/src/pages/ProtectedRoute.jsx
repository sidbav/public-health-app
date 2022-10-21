import React from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children , isAuthenticated,user}) => {
    // user json web token check
    if(!user){
        return <Navigate to = '/register' />
    }
    return children

}

ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object
}


const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      user:state.auth.user
    }

}
export default connect(mapStateToProps,null)(ProtectedRoute);

