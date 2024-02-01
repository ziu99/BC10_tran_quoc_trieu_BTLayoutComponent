import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div>
        <section class="pt-4">
          <div class="container px-lg-5">
            <div class="row gx-lg-5">
              <div class="col-lg-3 mb-5">
                <div class="card bg-light border-0 h-100">
                  <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i class="bi bi-collection"></i>
                    </div>
                    <h2 class="fs-4 fw-bold">Card Title</h2>
                    <p class="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus quibusdam odit neque.
                    </p>
                    <a style={{
                        fontSize: "15px",
                      }} class="btn btn-primary mt-4" href="#!">
                      Find Out More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3  mb-5">
                <div class="card bg-light border-0 h-100">
                  <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i class="bi bi-cloud-download"></i>
                    </div>
                    <h2 class="fs-4 fw-bold">Card Title</h2>
                    <p class="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus quibusdam odit neque.
                    </p>
                    <a style={{
                        fontSize: "15px",
                      }} class="btn btn-primary mt-4" href="#!">
                      Find Out More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3  mb-5">
                <div class="card bg-light border-0 h-100">
                  <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i class="bi bi-card-heading"></i>
                    </div>
                    <h2 class="fs-4 fw-bold">Card Title</h2>
                    <p class="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus quibusdam odit neque.
                    </p>
                    <a style={{
                        fontSize: "15px",
                      }} class="btn btn-primary mt-4" href="#!">
                      Find Out More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3  mb-5">
                <div class="card bg-light border-0 h-100">
                  <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i class="bi bi-bootstrap"></i>
                    </div>
                    <h2 class="fs-4 fw-bold">Card Title</h2>
                    <p class="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus quibusdam odit neque.
                    </p>
                    <a
                      style={{
                        fontSize: "15px",
                      }}
                      class="btn btn-primary mt-4"
                      href="#!"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
