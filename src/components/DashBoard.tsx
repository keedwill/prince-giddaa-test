import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccessAction } from "../redux/actions/loginSuccess.actions";
import { getDefaultTransactionAction } from "../redux/actions/getDefaultTransaction.actions";
import { ReducersType } from "../redux/store";
import { getExpectedTransactionAction } from "../redux/actions/getExpectedTransaction.actions";
import { getSuccessfulTransactionAction } from "../redux/actions/getSuccessfulTransaction.actions";
import { getTansactionSummaryAction } from "../redux/actions/getTransactionSummary.actions";
import Spinner from "./Spinner";

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentTab, setCurrentTab] = useState<tabsType>();

  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state: ReducersType) => state.token.token);
  const defaultTransactionResponse = useSelector(
    (state: ReducersType) => state.defaultTransaction
  );
  const expectedTransactionResponse = useSelector(
    (state: ReducersType) => state.expectedTransaction
  );

  type tabsType =
    | "SUMMARY"
    | "SUCCESFUL TRANSACTIONS"
    | "EXPECTED TRANSACTIONS"
    | "DEFAULTS";

  const tabs = [
    "SUMMARY",
    "SUCCESFUL TRANSACTIONS",
    "EXPECTED TRANSACTIONS",
    "DEFAULTS",
  ];

  type TransactionType = {
    amount: number;
    customer: {
      lastName: string;
      firstName: string;
    };
    transactionType: string;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logOutHandler = () => {
    Dispatch(loginSuccessAction(null) as never);
    navigate("/");
  };

  const getTransactionsHandler = (tab: tabsType) => {
    if (tab === "SUCCESFUL TRANSACTIONS") {
      if (token === null) {
        return navigate("/");
      } else {
        Dispatch(getSuccessfulTransactionAction(token) as never);
      }
    }
    if (tab === "EXPECTED TRANSACTIONS") {
      setCurrentTab("EXPECTED TRANSACTIONS");
      if (token === null) {
        return navigate("/");
      } else {
        Dispatch(getExpectedTransactionAction(token) as never);
      }
    }
    if (tab === "DEFAULTS") {
      if (token === null) {
        return navigate("/");
      } else {
        Dispatch(getDefaultTransactionAction(token) as never);
      }
    }
    if (tab === "SUMMARY") {
      if (token === null) {
        return navigate("/");
      } else {
        Dispatch(getTansactionSummaryAction(token) as never);
      }
    }
  };

  // useEffect(() => {
  //   if (token === null) {
  //     return navigate("/");
  //   } else {
  //     Dispatch(getExpectedTransactionAction(token) as never);
  //   }
  // }, []);

  const expectedTransactions =
    expectedTransactionResponse.serverResponse.value?.data;


    const loading = expectedTransactionResponse.loading;
  // console.log(token);

  return (
    <div className="relative min-h-screen md:flex">
      <div
        className={`bg-[#f0f0f0] text-black w-64 py-4 ${
          isOpen ? "block" : "hidden"
        } md:block md:relative`}
      >
        <div className="h-16 flex items-center justify-between p-4">
          <img src="Giddaa Logo.png" alt="" />
          <button onClick={toggleMenu} className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="#335F32"
              stroke="#335F32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <nav className=" pb-4 ">
          <ul>
            <li>
              <Link
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                to=""
                className="gap-2 my-4 p-2 text-sm flex  border-r-4 border-[#335F32] "
              >
                <img
                  className={`${isHovered ? "text-[#335F32]" : "text-black"}`}
                  src="money.svg"
                  alt=""
                />
                <h5
                  className={`${isHovered ? "text-[#335F32]" : "text-black"}`}
                >
                  {" "}
                  TRANSACTIONS & EARNINGS
                </h5>
              </Link>
            </li>
            <li
              onClick={logOutHandler}
              className="gap-2  cursor-pointer my-4 p-2 text-sm flex   "
            >
              <h5 className={`text-[#C11111] font-bold`}>Log Out</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-[#C11111]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-4 border">
        <h1 style={{ fontFamily: "myFirstFont" }} className="text-[50px] mb-4">
          Transactions
        </h1>
        <h4 className="text-sm text-[#4B4B4B]">
          View all your transactions and how much you have earned from customers
        </h4>

        <div className="text-sm mt-4  text-gray-500 border-b border-gray-200 ">
          <ul className="flex flex-wrap  gap-4 py-2 -mb-px">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className="me-2 cursor-pointer"
                onClick={getTransactionsHandler.bind(this, tab)}
              >
                <span className=" p-2   border-b-2 border-transparent rounded-t-lg hover:text-[#335F32] hover:border-[#335F32] ">
                  {tab}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-x-auto mt-6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  id
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Property
                </th>
                <th scope="col" className="px-6 py-3">
                  Plan
                </th>
                <th scope="col" className="px-6 py-3">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Days Overdue
                </th>
              </tr>
            </thead>
            <tbody>
              {loading && <Spinner />}
              {currentTab === "EXPECTED TRANSACTIONS" && !loading && (
                <>
                  {expectedTransactions?.map(
                    (transaction: TransactionType, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {index + 1}
                        </th>
                        <td className="px-6 py-4">
                          {transaction.customer.firstName}{" "}
                          {transaction.customer.lastName}
                        </td>
                        <td className="px-6 py-4">{transaction.amount}</td>
                        <td className="px-6 py-4">
                          {transaction.transactionType}
                        </td>
                      </tr>
                    )
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
