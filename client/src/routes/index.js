import SocialAuth from '../views/SocialAuth';
import AuthenticatedView from '../views/AuthenticatedView';
import CourseView from '../views/CourseView';
import LessonView from '../views/LessonView';

const indexRoutes = [
  { path: "/social-auth", name: 'SocialAuth  ', component:SocialAuth },
  { path: "/home", name: 'AuthenticatedView  ', component: AuthenticatedView, auth: true },
  { path: "/boost", name: 'CourseView ', component: CourseView, exact: true, auth: true },
  { path: "/boost/:boostID", name: 'LessonView ', component: LessonView, auth: true }
]

export default indexRoutes;