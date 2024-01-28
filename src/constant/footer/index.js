import SendIcon from '@mui/icons-material/Send';
export const footerData = [
  {
    category: "REVIEWS",
    categoryList: [
      { name: "Latest Reviews" },
      { name: "Xbox One" },
      { name: "Wii U2" },
      { name: "PS4" },
      { name: "PC" },
    ],
  },
  {
    category: "WHAT’S IN STORE",
    categoryList: [
      { name: "Action" },
      { name: "Adventure" },
      { name: "Strategy" },
      { name: "Puzzle" },
      { name: "Misc" },
    ],
  },
  {
    category: "WHAT’S NEW",
    categoryList: [
      { name: "Gamez News" },
      { name: "What’s New" },
      { name: "Ghost Recon Wildlands" },
      { name: "Dark Souls III" },
      { name: "Uncharted 4" },
    ],
  },
  {
    category: "NEWSLETTER",
    categoryList: [
      { name: "Get our weekly newsletter." },
      {
        name: (
          <div>
            <input
              className="px-3 py-2 bg-yellow-900 text-white"
              placeholder=" Enter Your Email"
            />
            <button className="uppercase text-lg font-bold text-white px-3 duration-300 py-[5px] bg-primary hover:bg-white hover:text-primary"><SendIcon/></button>
          </div>
        ),
      },
      { name: <h1 className='text-2xl font-semibold uppercase'>follow us</h1> },
    ],
  },
];

export const sortCategory = [
  { name: "Action" },
  { name: "Adventure" },
  { name: "Strategy" },
  { name: "Puzzle" },
  { name: "Misc" },
];

export const createdBy = "Designed & Developed by Mahfuj Ahmed";
