<template>
    <footer class ="footer">
        <div class="logo">
            <img src="../assets/logos/eclipse-footer-logo.png" alt="Eclipse Logo">
            <p class="copyright">© 2024 Eclipse Learning Platform. All rights reserved.</p>
        </div>
    </footer>
  </template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

  <style scoped>
  .footer {
    background-color: #13112E;
    text-align: left;
  }
  .logo img {
    height: auto;
    max-height: 30px;
  }
  .copyright {
    margin-left: 10px;
    margin-bottom: 5px;
    font-size: 14px;
    color: #DBC3F2;
  }
  </style>
