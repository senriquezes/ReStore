import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useStoreContext } from "../../app/context/StoreContext";
import { currencyFormat } from "../../app/util/util";

export default function BasketSummary() {
  const { basket } = useStoreContext();
  const subtotal = basket
    ? basket.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
    : 0;
  const deliveryFee = subtotal > 10000 ? 0 : 500;

  return (
    <>
      <TableContainer component={Paper} variant={"outlined"}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ width: "170px" }}>Subtotal</TableCell>
              <TableCell align="right" style={{ width: "100px" }}>
                {currencyFormat(subtotal)}
              </TableCell>
              <TableCell style={{ width: "90px" }}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Delivery fee*</TableCell>
              <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell align="right">
                {currencyFormat(subtotal + deliveryFee)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>
                <span style={{ fontStyle: "italic" }}>
                  *Orders over $100 qualify for free delivery
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
