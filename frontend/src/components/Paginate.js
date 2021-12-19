import React from "react";
import { Pagination, PageItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function Paginate({ pages, page, keyword = "", isAdmin = false }) {
  if (!!keyword) {
    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }

  console.log(keyword, pages, page);
  return (
    // <div> pageinations</div>
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Link
            as={Link}
            key={x + 1}
            to={
              !isAdmin
                ? `/?keyword=${keyword}&page=${x + 1}`
                : `/admin/productlist/?keyword=${keyword}&page=${x + 1}`
            }
          >
            {/* {console.log(x + 1)}
            <PageItem active={x + 1 === page}>{x + 1}</PageItem> */}
            {x + 1}
          </Link>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;
