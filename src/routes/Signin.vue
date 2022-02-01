<template>
  <a href="#">
    <img class="main" src="../assets/main.png" alt="" />
    <img class="logo" src="../assets/logo.png" alt="" />
  </a>
  <div class="box">
    <div class="login">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        로그인
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Login</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="LoginEmail" class="login Email address"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="LoginEmail"
                    aria-describedby="emailHelp"
                  />
                  <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                </div>
                <div class="mb-3">
                  <label for="Loginpw" class="login Password">Password</label>
                  <input type="password" class="form-control" id="Loginpw" />
                </div>
                <!-- <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
              </form>
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
              <button type="button" class="btn btn-primary">login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="join">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        회원가입
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModal1Label"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModal1Label">Join</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="Join Email address"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                </div>
                <div class="mb-3">
                  <label for="pw1" class="Join Password">Password</label>
                  <input type="password" class="form-control" id="pw1" />
                </div>
                <div class="mb-3">
                  <label for="pw2" class="Join Password comfirm"
                    >Password comfirm</label
                  >
                  <input type="password" class="form-control" id="pw2" />
                </div>
                <div class="mb-3">
                  <label for="name" class="name">name</label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div class="mb-3">
                  <label for="call number" class="call number"
                    >call number</label
                  >
                  <input type="tel" class="form-control" id="call number" />
                </div>
                <!-- <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div> -->
                <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
              </form>
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
              <button type="button" class="btn btn-primary">join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <button type="button" class="btn btn-outline-success">
    비회원 둘러보기
  </button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "~/scss/main.scss";
a {
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 300px 0 0 0;
  .logo {
    display: none;
  }
}
.box {
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 20px;

  button {
    margin-right: 15px;
  }
  // button:nth-child(3){
  //   margin-right: 0px;
  // }
}

form div input:invalid {
  color: red;
}
// 반응형
@include media-breakpoint-down(sm) {
  a {
    margin: 200px 0 0 0;
    .main {
      display: none;
    }
    .logo {
      display: flex;
      align-content: center;
      justify-content: center;
    }
  }
  .box {
    margin-top: 30px;
  }
}
</style>
