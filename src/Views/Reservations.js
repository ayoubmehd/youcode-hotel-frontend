import { useState, useEffect, Fragment } from "react";
import { Link, useSearchParams } from "react-router-dom";
import findById from "../APIs/orders/findById";
import getAll from "../APIs/orders/getAll";
import destroy from "../APIs/orders/destroy";
import AppButton from "../Components/AppButton";
import AppTable, { AppTBody, AppTr, AppTd } from "../Components/AppTable";

const headings = [
  {
    text: "Start date",
    slug: "start-date",
  },
  {
    text: "End Date",
    slug: "end-date",
  },
  {
    text: "Total Price",
    slug: "total-price",
  },
  {
    text: "Confirmed",
    slug: "confirmed",
  },
];

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [nextPage, setNextPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [params, setParams] = useSearchParams({ page: 1 });
  const [page, setPage] = useState(params.get("page"));

  useEffect(() => {
    setParams({ page });
    getReservations();
  }, [page]);

  function getReservations() {
    getAll(page).then(([err, res]) => {
      setNextPage(res.nextPage);
      setPrevPage(res.prevPage);
      setReservations(res.data);
    });
  }

  async function expand(index) {
    if (reservations[index].expand) {
      delete reservations[index].expand;
      setReservations([...reservations]);
      return;
    }

    const [err, moreData] = await findById(reservations[index]._id);

    reservations[index] = {
      ...reservations[index],
      expand: moreData,
    };
    setReservations([...reservations]);
  }

  function remove(id) {
    destroy(id).then(([err, res]) => {
      getReservations();
    });
  }

  //
  function Expantion({ expand }) {
    if (expand) {
      return (
        <AppTr>
          <AppTd colspan={headings.length}>
            <div className="flex justify-around">
              <div>{expand?.customer?.email}</div>
              <div>{expand?.customer?.firstName}</div>
              <div>{expand?.customer?.lastName}</div>
            </div>
          </AppTd>
        </AppTr>
      );
    }
    return <></>;
  }

  function next() {
    if (!nextPage) return;
    setPage(nextPage);
  }
  function prev() {
    if (!prevPage) return;
    setPage(prevPage);
  }

  return (
    <div className="container m-auto">
      <div className="flex justify-between mb-3">
        <h1 className="text-2xl font-bold">Reservations</h1>
        <AppButton type="link" attr={{ to: "/reservations/new" }}>
          <span>New Reservation</span>
        </AppButton>
      </div>
      <AppTable headings={headings}>
        <AppTBody>
          {reservations.map((reservation, index) => (
            <Fragment key={reservation._id}>
              <AppTr>
                <AppTd>
                  <div>
                    <p>
                      {new Date(reservation.startDate).toLocaleString("en")}
                    </p>
                    <div className="px-1">
                      <Link
                        className="mx-1 text-purple-600 font-bold"
                        to={`/reservations/${reservation._id}`}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => remove(reservation._id)}
                        className="mx-1 text-red-500 font-bold"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => expand(index)}
                        className="mx-1 text-purple-600 font-bold"
                      >
                        Expand
                      </button>
                    </div>
                  </div>
                </AppTd>
                <AppTd>
                  {new Date(reservation.endDate).toLocaleString("en")}
                </AppTd>
                <AppTd>
                  {parseFloat(reservation.totalPrice.$numberDecimal).toFixed(2)}{" "}
                  MAD
                </AppTd>
                <AppTd>{reservation.isPublished ? "Yes" : "No"}</AppTd>
              </AppTr>
              <Expantion expand={reservation.expand} />
            </Fragment>
          ))}
        </AppTBody>
      </AppTable>
      <div className="flex justify-center py-4">
        <AppButton
          attr={{
            className: `mx-2 ${!prevPage ? "bg-gray-500" : ""}`,
            onClick: () => prev(),
          }}
        >
          &lt;&lt; Prev
        </AppButton>
        <AppButton
          attr={{
            className: `mx-2 ${!nextPage ? "bg-gray-500" : ""}`,
            onClick: () => next(),
          }}
        >
          Next &gt;&gt;
        </AppButton>
      </div>
    </div>
  );
}

export default Reservations;
