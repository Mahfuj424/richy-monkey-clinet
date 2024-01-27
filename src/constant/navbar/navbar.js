import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import PeopleIcon from "@mui/icons-material/People";
import PostAddIcon from "@mui/icons-material/PostAdd";
export const logo = "https://i.ibb.co/5R0gF0s/richy-mokey.png";

export const navMenu = [
  {
    title: "Home",
    url: "/",
    icon: <HomeIcon />,
    DROPDOWN: [],
  },
  {
    title: "Shop",
    url: "/shop",
    icon: <LocalMallIcon />,
    DROPDOWN: [
      {
        title: "MY ACCOUNT",
        url: "/myAccount",
      },
      {
        title: "CHECKOUT",
        url: "/checkout",
      },
      {
        title: "CART",
        url: "/cart",
      },
    ],
  },
  {
    title: "Blog",
    url: "/blog",
    icon: <PlayLessonIcon />,
    DROPDOWN: [],
  },
  {
    title: "Community",
    url: "/community",
    icon: <PeopleIcon />,
    DROPDOWN: [
      {
        title: "SITE-WIDE-ACTIVITY",
        url: "/siteWideActivity",
      },
      {
        title: "FORUM",
        url: "/forum",
      },
      {
        title: "TOPIC",
        url: "/topic",
      },
    ],
  },
  {
    title: "Page",
    url: "/page",
    icon: <PostAddIcon />,
    DROPDOWN: [
      {
        title: "Contact Us",
        url: "/contactUs",
      },
      {
        title: "About Us",
        url: "/aboutUs",
      },
      {
        title: "FAQ",
        url: "/faq",
      },
    ],
  },
];
