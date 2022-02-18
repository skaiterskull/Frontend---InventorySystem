import React, { useState, useEffect } from "react";

const Test = () => {
  const user = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const [disabledBtmList, setDisabledBtmList] = useState(false); // to detect if user scroll up y axis
  const [numberOfUser, setNumberOfUser] = useState(6); // small screen max 2 user, medium max 4 user, large max 6 user
  const [currentPage, setCurrentPage] = useState(1); //the current page you are at, this will be in useState

  const userPerPage = disabledBtmList ? numberOfUser / 2 : numberOfUser;
  const totalPage = Math.ceil(user.length / userPerPage);

  //generate the number item per row based on the the number of user per page.
  const generateItemPerRow = (userPerPage) => {
    let items = 0;
    switch (userPerPage) {
      case 6: //large screen 6 user per page, 3 item per row
        items = 3;
        break;
      case 4: //medium screen 4 userperpage, 2 item per row
        items = 2;
        break;
      case 3:
        disabledBtmList ? (items = 3) : (items = 2);
        break;
      case 2: //small screen 2 userPerpage, 1 item per row
        disabledBtmList ? (items = 2) : (items = 1);
        break;
      case 1:
        items = 1;
        break;
      default:
    }
    return items;
  };

  const itemPerRow = generateItemPerRow(userPerPage); //geneerate itemPerRow

  //set the start and end index for slicing the array
  const startIndex = (currentPage - 1) * userPerPage;
  const endIndex = startIndex + userPerPage;

  //get the whole user for display
  const shownUser = user.slice(startIndex, endIndex);

  //split the shownUser to toplist and btmList
  const topList = shownUser.slice(0, itemPerRow);
  const btmList = shownUser.slice(itemPerRow, shownUser.length);

  //listen to window size-------------------------------------------------------------------------
  const useWindowSize = () => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          if (window.innerWidth > 0 && window.innerWidth < 800) {
            setNumberOfUser(2);
          }
          if (window.innerWidth >= 800 && window.innerWidth < 1050) {
            setNumberOfUser(4);
          }
          if (window.innerWidth >= 1050) {
            setNumberOfUser(6);
          }
          if (window.innerHeight < 800) {
            setDisabledBtmList(true);
          }
          if (window.innerHeight >= 800) {
            setDisabledBtmList(false);
          }
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  };
  //listen to window size-------------------------------------------------------------------------

  useWindowSize();

  useEffect(() => {
    setCurrentPage(1);
  }, [totalPage]);

  return (
    <div
      style={{
        maxWidth: "1000px",
        height: "800px",
        border: "1px solid",
        margin: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div className="top" style={{ display: "flex", gap: "1rem" }}>
        {topList.map((value) => (
          <div
            style={{
              height: "300px",
              width: "320px",
              background: "black",
              color: "red",
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="bottom" style={{ display: "flex", gap: "1rem" }}>
        {btmList.map((value) => (
          <div
            style={{
              height: "300px",
              width: "320px",
              background: "black",
              color: "red",
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{`${currentPage}/${totalPage}`}</span>
    </div>
  );
};

export default Test;
