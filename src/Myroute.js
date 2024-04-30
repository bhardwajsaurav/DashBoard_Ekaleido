

import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Camp from "./campaingn/Campaingn"
import NewCamp from "./newcampaign/page"
import Layout from "./Layout"

import Report from "./report/Report"



const Myroute = () => {

    return (

        <>



            <BrowserRouter>
                <Routes>
                    {/* <Route
                        exact
                        path="/"
                        element={
                            <Layout component={Camp} />


                        }
                    />

                    <Route
                        exact
                        path="/newcampaign"
                        element={
                            <Layout component={NewCamp} />



                        }
                    /> */}
                    <Route
                        exact
                        path="/"
                        element={
                            <Report />

                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )


}



export default Myroute;