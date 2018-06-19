import React, { Component } from "react";
import Layout from "./layouts/default";

export default class Login extends Component {
    render() {
        return (
            <Layout>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "15%",
                  fontSize: "1.3em"
                }}
              >
                <div>
                    <a href="/auth">Авторизоваться с помощью Google</a>
                </div>
                
              </div>
            </Layout>
          );
    }
}