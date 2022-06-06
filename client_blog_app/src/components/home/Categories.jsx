import React from "react";
import { Link, useLocation,useSearchParams } from "react-router-dom";
import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { categories } from "../../constant/data";

const useStyles = makeStyles({
  createBtn: {
    margin: 20,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    width: "86%",
  },
  table: {
    border: "5px solid rgba(224,224,224)",
  },
});

const Categories = () => {
  const classes = useStyles();
  const location = useLocation();
  const [searchParams,setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  return (
    <>
      <Link
        to={`/create`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Button className={classes.createBtn}>Create Blog</Button>
      </Link>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                All Category
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category,i) => (
            <TableRow key={i}>
              <TableCell>
                <Link
                  to={`/?category=${category}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {category}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
