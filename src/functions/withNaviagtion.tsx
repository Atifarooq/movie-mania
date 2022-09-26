import React from 'react'
import { Link } from 'react-router-dom'

const withNaviagtion = (Component: any) => (props: any) => <Link to={`/list/${props.id}`} className="hover:drop-shadow-xl"><Component {...props} /></Link>;
export default withNaviagtion