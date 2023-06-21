<script setup>
import { RouterLink, RouterView } from "vue-router";
import NetlifyForm from "./components/NetlifyForm.vue";
</script>

<template>
  <div class="content">
    <header>
      <div class="wrapper flex flex-col">
        <h2 class="font-bold text-5xl pb-2">Epilogues</h2>
        <p class="text-xl">Directed by <b>Ari Alexander Ergis Magnússon</b></p>
        <div class="nav flex flex-col md:flex-row text-left mt-6">
          <a class="button" href="#about" v-smooth-scroll>About the Film</a>
          <a class="button" href="#trailer" v-smooth-scroll
            >Watch the Trailer</a
          >
          <a class="button" href="#contact" v-smooth-scroll>Contact Us</a>
        </div>
        <div class="relative flex flex-wrap justify-between top-10 left-30">
          <a
            class="opacity-80 hover:opacity-100"
            target="_blank"
            href="http://marchedufilm.com/projects/loss/"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="auto"
              class="h-8 md:h-11"
              viewBox="0 0 202.5 110.8"
            >
              <g fill="#fff">
                <path
                  d="M16.6 108.8v-12.4l-4.2 12.4h-2.7l-4-12.4v12.4h-2.6v-15.9h3.7l4.4 12.6 4.3-12.7h3.8v16h-2.7zm13-12.8l-2.2 6.3h4.5c-.1 0-2.3-6.3-2.3-6.3zm4.5 12.8l-1.5-4.1h-6.3l-1.5 4.1h-2.8l6.2-15.9h2.9l6.1 15.9h-3.1zm14.9-12.9c-.4-.4-.5-.5-3.4-.5h-2.7v4.5h2.9c.8 0 2.4 0 2.9-.2.4-.2.8-.6.8-2-.2-1-.4-1.6-.5-1.8m.4 12.9v-4.2c0-2.4 0-2.3-3.9-2.3h-2.7v6.5h-2.8v-15.9h5.6c3.6 0 6.6.1 6.6 4.6 0 1.9-.4 3.1-1.6 3.5 1.7.5 1.6 2.6 1.6 3.9v3.9h-2.8zm16.8-11.4c0-1.6-.7-2-3.4-2-3.2 0-3.7 1.1-3.7 5.6s.5 5.5 3.7 5.5c2.7 0 3.4-.5 3.4-2h2.8c0 3.6-2.3 4.7-6 4.7-6.7 0-6.7-3.6-6.7-8.1 0-4.6.1-8.1 6.8-8.1 3.6 0 6 1.1 6 4.7l-2.9-.3zm15.4 11.4v-6.9h-6.6v6.9h-2.8v-15.9h2.8v6.5h6.6v-6.5h2.8v15.9h-2.8zm12.6-17.5h-3l3.3-3h3l-3.3 3zm-5.3 17.5v-15.9h11v2.5h-8.2v4.1h7.9v2.5h-7.9v4.4h8.2v2.5l-11-.1zm26.1-13.5h-3v10.9h3c3.2 0 4.2-.2 4.2-5.4-.1-5.2-1-5.5-4.2-5.5m6 11.4c-1.2 1.7-2.9 2.1-5.8 2.1h-5.9v-15.9h5.9c3 0 4.7.5 5.8 2.1.9 1.3 1.1 2.7 1.1 5.8-.2 3.2-.3 4.6-1.1 5.9m17.1-2.5c-.2 3.4-2.3 4.8-6 4.8s-5.8-1.5-6-4.8v-11.4h2.8v7.9c0 4.2-.2 5.6 3.3 5.6 3.6 0 3.2-1.5 3.2-5.6v-7.9h2.8v7.9c0 1.7 0 2.7-.1 3.5"
                ></path>
                <path
                  d="M150.7 95.3v4.1h7.7v2.5h-7.7v6.9h-2.8v-15.9h10.7v2.4h-7.9zm11.9-2.4h2.8v15.9h-2.8v-15.9zm8 15.9v-15.9h2.8v13.4h7.9v2.5h-10.7zm26.2 0v-12.4l-4.1 12.4h-2.8l-4-12.4v12.4h-2.6v-15.9h3.8l4.3 12.6 4.4-12.7h3.7v16h-2.7zM101 77.5c-36.3 0-67.5-16.9-67.5-36.9s31.9-37.3 67.5-37.3c36.3 0 67.5 17.3 67.5 37.2 0 20.1-31.3 37-67.5 37m.1-75.8c-39.5 0-71.3 17.5-71.3 38.9s31.5 38.9 71.3 38.9c39.6 0 71.3-17.5 71.3-38.9s-31.8-38.9-71.3-38.9m35.7 41.2c-.1-.8.8-1.4 1.4-1.9 2.3-1.9 2.7-.1 2.7-.1-1.2.8-2.7 1.8-4.1 2m-7.5-5.3c-.8 1.3-.2 3.1-1.3 4.3l-6.9-.9c4-1.5 7.3-4.2 9.2-5.2l-1 1.8zm-48.6-1.1c-.5-.3-.1-.9 0-1.1.1-.2 1.7-3 3.1-2.3.2.8-2.2 3.6-3.1 3.4m74.2-.8c-2.2.5-4.3 1.2-6.3 1.7-1.4.4-2.7.8-4.2 1h-.6l.3-.4.6-.6 6.6-5.8c.7-.8 2.2-1.5 1.7-2.9-.5-.2-1.6.3-2.2.5-4.3 2.2-8.1 4.7-11.7 8l-.3.3c-2 1.6-2.4 5.1-5.4 4.9-1.9-.2-2.2-.2-3-.4 3.1-2.4 9.1-10.4 9.6-12.2 0 0 .6-1.7-.2-1.6-2.8 1.1-5.5 3.5-7.8 5.4.2-1 1.7-2.8 1-3.9-4.9 1.1-11.9 7.7-11.9 7.7-1.4.9-1.8 3.7-3.9 3.3-1.3-.2-2.8-.2-3.6-.7 1.4-.8 2.6-1.6 3.8-2.6 2.8-2.2 5.5-4.7 8.2-7.2.2-.4 1.1-.7.6-1.3-.9-.7-1.8.3-2.8.5-4.3 1.8-7.2 4.4-10 7.9-.5.7-1.4 1.5-1.7 2.2-2-.2-3.1-.1-4.1-.8l1.8-1.5c3.3-2.6 6.7-5.1 9.1-9-.3-1.4-1.6-.3-2.2 0-4.5 2.2-8.1 4.9-11.1 9.3-.2.3-.4.6-.5.9-1.9-.1-3.7-.5-5.4-.9h-.1v-.2c4.3-2.2 8.1-6 11.1-10.5 0 0 2.4-4.4-2.9-.8-4.1 2.6-7.7 6-10.3 10.9 0 0-2.7.1-2.7-.2 2.6-3.2 5.6-7.4 7.2-11.5.2-.7.6-2-.4-2.2-3.6 1.6-6 5.8-7.9 9.8l-1.5 3.8c-2.4-.1-4.1.1-6.4-.6 2.9-2.5 6.1-4.7 8.8-7.8.5-.9 3.5-2.9 3.4-5.5-1-.6-1.8.1-2.4.5l-8.2 6.6h-.4c1.4-2.3 4.2-5.7 5.3-8.1.4-.8.9-1.6.9-2.5h-1c-5.8 2.5-11 8.3-13 15.8-.5.7-.8 2-1.7 1.6-.1-2-.8-4-1.5-5.8-2.5-5.3-6.2-9.2-10.9-12-.8-.4-1.2.4-1 1.1.7 3.8 3 6.1 4.6 8.9 1.9 2.9 4.5 5.6 6.6 8.2-.8.3-17.6 4.3-20.5 6.7-1.6.9-4.1 2.9-4.1 7.3.1 1.3 1.1 2.6 2.2 3 1.1.2 1.8.3 2.6-.2 3.1-4 6.7-7.6 10.8-10 2.7-1.5 4.7-2.9 7.9-3.3 1.3 1.3 2.1 2.8 4 4.3 3.5 3.2 6.6 5.3 11.4 6.1l.5-.2-.2-.5c-2.5-3.7-6.5-6.1-10.5-8-.7-.5-2.3-1.4-2.4-2.4 2.4-.9 5.7-1.1 8.7-.4 3.5 6.1 7.5 12.9 13.1 16.8.4.1.7-.5.5-.9-4-9.6-6.5-10.5-10.5-14.8-.2-.3-.5-1.1.1-1.4l3.8.1c1.2.2 2.9-.2 3.2.4.2 6.3 4.3 11.1 6.7 16 0 0 .8.5.8-.4v-.1c-1-11.1-5.2-13.8-5.8-15.6.7 0 1.4 0 1.8.3 2.6 5.4 6.2 9.5 11 12.5.1.1.7.1.3-.7-1.4-4.7-5.6-7-8.4-10.5l-.5-.9.6-.1c1.2.2 2.8.5 3.7 1.1 1.6 3 3.7 5.3 6 7.6 1.8 1.7 3.5 3.7 6.3 4.3h.3l.1-.3-.1-.4c-1.7-4.6-6.5-6.5-9.8-9.8-.2-.2-.7-1.1 0-1.2l5.3.8c8 10.8 11.2 10.4 11.2 10.4s2.4.6 1.4-1.3c-2.6-2.7-4.9-4-8-6.5-.6-.6-1.9-1.5-1.8-2.4 1.2.2 1.4.2 3.7.4.8.1 1.7.2 2.3.5 4.3 1.8 4.6 7.8 14.8 9 .4 0 .5-.5.2-.8-2.9-2.3-10.6-7.4-11.1-7.9 1 .1 5 .7 5.7 1 5.1 2.8 8.3 4.8 15.7 3.9.7-1-.4-1.3-1.3-1.6l-4.2-1.6c-.6-.2-2.8-.6-3.7-.9 4.5-1.4 10.3-3 14.2-5.3l1.9-1.4c.4-.4.8-.8 1-1.4.1-.9-.9-.6-.9-.6"
                ></path>
              </g></svg
          ></a>
          <a
            class="opacity-80 md:ml-8 hover:opacity-100"
            target="_blank"
            href="http://icelandicfilms.info"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="auto"
              class="h-8 md:h-11"
              viewBox="0 0 67.227 64.625"
            >
              <g fill="#fff">
                <path
                  d="M61.529 64.426h4.573v-.922h-1.358l-.519-.34 1.877-.941v-1.038l-2.614 1.383-1.959-1.242v1l1.83 1.164v.014h-1.83v.922z"
                />
                <path
                  d="M65.121 60.002v.014l-2.465.492v.922l3.446-.89v-1.024l-3.446-.866v.884l2.465.468z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M66.102 58.447v-.883h-3.445v.883h3.445zm-3.868 0v-.883h-.756v.883h.756z"
                />
                <path
                  d="M61.529 57.063h4.573v-.883h-1.008l-.408-.314 1.416-.736v-.972l-2.09 1.139-1.356-.992v.972l1.287.891v.012h-2.414v.883zm4.573-3.015v-.884h-2.268c-.396 0-.59-.18-.59-.461 0-.249.162-.346.449-.346h2.408v-.885h-2.268c-.396 0-.59-.178-.59-.46 0-.249.162-.346.449-.346H66.1v-.884h-2.504c-.666 0-1.031.275-1.031.857 0 .418.184.736.551.871v.014c-.352.095-.551.391-.551.795 0 .37.127.645.443.869v.014h-.354v.845h3.448v.001zm1.125-4.698v-.36c0-.819-.164-1.018-1.355-1.325l-3.215-.831v.883l2.381.449v.012l-2.381.513v.921l3.445-.967c.307.026.486.147.486.475 0 .076-.006.154-.02.23h.659zm-1.125-2.688v-.885h-2.285c-.387 0-.572-.166-.572-.467 0-.263.135-.378.48-.378h2.377v-.884h-2.557c-.68 0-.979.326-.979.878 0 .371.152.69.494.878v.011h-.404v.847h3.446z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64.377 42.813c-.748 0-1.133-.078-1.133-.462 0-.389.385-.467 1.133-.467.752 0 1.133.078 1.133.467 0 .384-.381.462-1.133.462zm1.725-.967v-.845H61.53v.884h1.447v.013c-.275.185-.41.409-.41.743 0 .723.531 1.056 1.811 1.056 1.281 0 1.814-.333 1.814-1.056 0-.347-.135-.591-.455-.783v-.012h.365zm-2.389-2.069h-.096c-.27 0-.449-.141-.449-.41 0-.294.16-.409.422-.409.23 0 .334.089.406.351l.133.501c.166.608.43.871 1.076.871.461 0 .986-.218.986-.833 0-.422-.09-.672-.449-.876v-.014c.115-.026.25-.052.359-.109v-.845c-.199.088-.348.109-.666.109h-1.814c-.619 0-1.055.197-1.055 1.248 0 .667.268 1.211 1.062 1.211h.084v-.795h.001zm1.346-.819c.377 0 .529.308.529.544s-.217.333-.479.333c-.309 0-.482-.141-.557-.499a1.127 1.127 0 0 0-.176-.378h.683z"
                />
                <path
                  d="M66.102 37.639v-.883h-2.268c-.396 0-.59-.179-.59-.461 0-.25.162-.346.449-.346h2.408v-.883h-2.268c-.396 0-.59-.182-.59-.463 0-.248.162-.346.449-.346H66.1v-.882h-2.504c-.666 0-1.031.275-1.031.858 0 .416.184.735.551.871v.012c-.352.097-.551.39-.551.794 0 .373.127.646.443.871v.014h-.354v.844h3.448z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M66.102 32.908v-.883h-3.445v.883h3.445zm-3.868 0v-.883h-.756v.883h.756zm2.19-2.119c-.641 0-1.129-.039-1.129-.474 0-.359.34-.474 1.129-.474.824 0 1.164.114 1.164.474 0 .435-.486.474-1.164.474zm-2.057.392l-.289-.493a6.08 6.08 0 0 1 .77-.589l.014.013a.726.726 0 0 0-.168.448c0 .78.666 1.114 1.684 1.114 1.199 0 1.832-.295 1.814-1.358 0-1.011-.635-1.357-1.814-1.357-1.17 0-1.953.371-2.695 1.05l-.287-.493-.27.275.289.48a7.59 7.59 0 0 0-.404.429l.391.667c.129-.134.268-.282.41-.423l.287.487.268-.25z"
                />
                <path
                  d="M64.975 28.787h.119c.66 0 1.098-.274 1.098-1.267 0-.744-.357-1.282-1.082-1.282-.52 0-.803.206-.986.762l-.18.532c-.098.294-.236.385-.404.385-.244 0-.371-.192-.371-.417 0-.287.172-.39.52-.39v-.794h-.143c-.619 0-.979.378-.979 1.178 0 .91.467 1.268 1.037 1.268.486 0 .787-.25.961-.736l.223-.621c.064-.172.168-.319.391-.319.277 0 .41.178.41.447 0 .301-.197.461-.498.461h-.115v.793h-.001zm-2.319-3.026v.449h.602v-.449h1.971c.699 0 .912-.128.912-.82 0-.205-.02-.384-.039-.577h-.615c.006.058.014.127.014.198 0 .257-.109.315-.379.315h-1.863v-.513h-.602v.513h-.988v.883h.987v.001z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M62.195 23.879v-.718h-.758v.718h.758zm0-1.102v-.717h-.758v.717h.758zm2.182 1.551c1.199 0 1.832-.295 1.814-1.359 0-1.012-.635-1.358-1.814-1.358-1.195 0-1.828.295-1.811 1.358 0 1.012.633 1.359 1.811 1.359zm0-.884c-.703 0-1.209-.039-1.209-.475 0-.358.352-.474 1.209-.474.859 0 1.211.115 1.211.474 0 .436-.506.475-1.211.475zm.047-2.92c-.641 0-1.129-.04-1.129-.474 0-.358.34-.474 1.129-.474.824 0 1.164.115 1.164.474 0 .434-.486.474-1.164.474zm-2.057.39l-.289-.492c.258-.225.52-.436.77-.589l.014.011a.733.733 0 0 0-.168.449c0 .782.666 1.115 1.684 1.115 1.199 0 1.832-.294 1.814-1.358 0-1.012-.635-1.358-1.814-1.358-1.17 0-1.953.372-2.695 1.051l-.287-.494-.27.277.289.48a6.965 6.965 0 0 0-.404.429l.391.666c.129-.134.268-.282.41-.422l.287.487.268-.252zm-1.109-4.037v-.602l-.92-.628v.883l.92.347zM66.102 16H61.53v.921h4.572V16z"
                />
                <path
                  d="M64.975 15.642h.119c.66 0 1.098-.275 1.098-1.269 0-.743-.357-1.281-1.082-1.281-.52 0-.803.206-.986.762l-.18.533c-.098.294-.236.383-.404.383-.244 0-.371-.191-.371-.415 0-.289.172-.391.52-.391v-.796h-.143c-.619 0-.979.379-.979 1.18 0 .91.467 1.267 1.037 1.267.486 0 .787-.248.961-.735l.223-.622c.064-.173.168-.32.391-.32.277 0 .41.18.41.449 0 .3-.197.461-.498.461h-.115v.794h-.001zm1.127-2.866v-.885h-4.573v.885h4.573z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M63.713 10.636h-.096c-.27 0-.449-.141-.449-.41 0-.295.16-.409.422-.409.23 0 .334.089.406.352l.133.499c.166.609.43.871 1.076.871.461 0 .986-.217.986-.833 0-.423-.09-.671-.449-.877v-.012c.115-.027.25-.052.359-.109v-.847c-.199.09-.348.11-.666.11h-1.814c-.619 0-1.055.199-1.055 1.248 0 .667.268 1.21 1.062 1.21h.084v-.793h.001zm1.346-.819c.377 0 .529.307.529.544 0 .236-.217.333-.479.333-.309 0-.482-.142-.557-.501a1.11 1.11 0 0 0-.176-.376h.683z"
                />
                <path
                  d="M66.102 8.499v-.884h-2.285c-.387 0-.572-.167-.572-.468 0-.261.135-.378.48-.378h2.377v-.883h-2.557c-.68 0-.979.326-.979.877 0 .37.152.691.494.877v.011h-.404v.846h3.446v.002z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64.377 4.649c-.748 0-1.133-.076-1.133-.461 0-.389.385-.466 1.133-.466.752 0 1.133.077 1.133.466 0 .385-.381.461-1.133.461zm1.725-.966v-.846H61.53v.884h1.447v.013c-.275.186-.41.41-.41.742 0 .724.531 1.057 1.811 1.057 1.281 0 1.814-.333 1.814-1.057 0-.346-.135-.589-.455-.781v-.012h.365z"
                />
                <path
                  d="M64.975 2.549h.119c.66 0 1.098-.275 1.098-1.268C66.191.538 65.834 0 65.109 0c-.52 0-.803.205-.986.763l-.18.531c-.098.295-.236.383-.404.383-.244 0-.371-.191-.371-.416 0-.288.172-.39.52-.39V.077h-.143c-.619 0-.979.376-.979 1.178 0 .909.467 1.267 1.037 1.267.486 0 .787-.249.961-.736l.223-.62c.064-.173.168-.321.391-.321.277 0 .41.181.41.449 0 .301-.197.461-.498.461h-.115v.794zM.027 10.41h2.825V.327H.027V10.41zm7.78-6.353h2.74V3.32c0-1.567-.354-3.19-3.363-3.19-3.627 0-3.627 2.118-3.627 5.238 0 3.22 0 5.24 3.627 5.24 2.475 0 3.42-1.356 3.42-3.714v-.636H7.865v.776c0 1.258-.186 1.71-.639 1.71-.691 0-.76-.424-.76-3.376 0-2.866.027-3.375.76-3.375.58 0 .58.805.58 1.243v.821h.001zm3.584 6.353h6.199V8.123h-3.375V6.372h3.035V4.167h-3.035V2.614h3.25V.327h-6.074V10.41zm7.062 0h5.901V8.123h-3.077V.327h-2.824V10.41z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.746 10.41h2.91L29.281.327h-3.543L23.352 10.41h2.91l.281-1.539h1.893l.31 1.539zm-.621-3.742H26.84l.648-4.137h.031l.606 4.137z"
                />
                <path
                  d="M36.684 6.484h-.032L35.215.327H32.15V10.41h2.569V4.196h.027l1.568 6.214h3.022V.327h-2.652v6.157z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M43.303 2.36h.41c.875 0 .986.523.986 1.54v2.937c0 .762-.111 1.54-.816 1.54h-.58V2.36zm-2.824 8.05h4.109c2.938 0 3.021-2.838 3.021-5.042 0-2.4-.098-2.937-.537-3.727C46.623.82 45.802.326 44.545.326h-4.066V10.41z"
                />
                <path
                  d="M48.443 10.41h2.823V.327h-2.823V10.41zm7.778-6.353h2.74V3.32c0-1.567-.354-3.19-3.359-3.19-3.631 0-3.631 2.118-3.631 5.238 0 3.22 0 5.24 3.631 5.24 2.469 0 3.416-1.356 3.416-3.714v-.636h-2.74v.776c0 1.258-.182 1.71-.635 1.71-.693 0-.764-.424-.764-3.376 0-2.866.029-3.375.764-3.375.578 0 .578.805.578 1.243v.821zM0 64.433h1.979v-4.254h3.3v-1.618h-3.3v-2.305h3.505v-1.619H0v9.796z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.104 64.433h1.898v-7.38H6.104v7.38zm0-8.288h1.898v-1.617H6.104v1.617z"
                />
                <path
                  d="M9.201 64.433h1.897v-9.796H9.201v9.796zm3.029 0h1.896v-4.857c0-.851.385-1.263.99-1.263.535 0 .742.344.742.961v5.159h1.896v-4.857c0-.851.387-1.263.99-1.263.537 0 .742.344.742.961v5.159h1.896v-5.364c0-1.429-.59-2.209-1.84-2.209-.895 0-1.582.396-1.871 1.18h-.029c-.205-.756-.838-1.18-1.703-1.18-.795 0-1.389.275-1.869.946h-.027v-.753H12.23v7.38zm19.247-6.491c0-1.427-.207-3.498-3.039-3.498-2.971 0-3.342 2.112-3.342 5.09s.371 5.091 3.342 5.091c2.6 0 3.121-1.825 3.121-3.938h-1.98c0 2.113-.521 2.483-1.236 2.483-.854 0-1.264-.535-1.264-3.498 0-2.771.232-3.773 1.236-3.773.893 0 1.182.617 1.182 2.044h1.98v-.001z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.729 61.03v-.427c0-2.263-.494-3.744-2.707-3.744-2.557 0-2.943 1.839-2.943 3.815 0 1.837.109 3.95 2.859 3.95 1.787 0 2.613-.961 2.682-2.677h-1.703c-.113.907-.373 1.388-1.004 1.388-.701 0-.936-.852-.936-1.717v-.588h3.752zm-3.752-1.126v-.287c0-.687.219-1.468.975-1.468.783 0 .922.631.965 1.755h-1.94z"
                />
                <path
                  d="M38.443 64.433h1.896v-4.898c0-.822.357-1.222 1.004-1.222.564 0 .811.29.811 1.029v5.091h1.896v-5.475c0-1.454-.701-2.099-1.883-2.099-.797 0-1.484.33-1.883 1.056h-.027v-.862h-1.814v7.38zm7.012-7.38h-.961v1.288h.961v4.227c0 1.495.273 1.947 1.76 1.947.439 0 .824-.04 1.236-.082v-1.318a3.814 3.814 0 0 1-.424.027c-.551 0-.676-.233-.676-.809v-3.992h1.1v-1.288h-1.1v-2.114h-1.896v2.114z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M58.908 61.03v-.427c0-2.263-.496-3.744-2.711-3.744-2.555 0-2.941 1.839-2.941 3.815 0 1.837.109 3.95 2.859 3.95 1.787 0 2.611-.961 2.682-2.677h-1.703c-.111.907-.371 1.388-1.006 1.388-.699 0-.936-.852-.936-1.717v-.588h3.756zm-3.756-1.126v-.287c0-.687.221-1.468.979-1.468.783 0 .922.631.963 1.755h-1.942z"
                />
                <path
                  d="M49.363 64.433h1.898v-4.432c0-.988.74-1.33 1.402-1.33.191 0 .396.014.59.027v-1.812a2.8 2.8 0 0 0-.344-.027c-.785 0-1.32.467-1.705 1.18h-.027v-.986h-1.814v7.38z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.959 18.82h47.043v28.385H5.959V18.82zM.02 13.667h58.924v38.692H.02V13.667z"
                />
              </g>
            </svg>
          </a>
          <a
            class="opacity-80 md:ml-8 hover:opacity-100"
            target="_blank"
            href="http://haraldhouse.com"
            ><img class="h-8 md:h-11" src="./assets/harroldhouse.png"
          /></a>

          <a
            class="opacity-80 md:ml-6 md:inline-block hover:opacity-100"
            target="_blank"
            href="http://icelandicfilms.info/company/nr/93"
            ><img class="h-8 md:h-11" src="./assets/ifc.png"
          /></a>
        </div>
      </div>
    </header>
    <div id="about" class="content-wrapper flex w-full py-10 bg-black/90 px-10">
      <div class="sidebar">
        <h3 class="mb-3">Post Production</h3>
        <p><b>Genre</b> Drama</p>
        <p><b>Country of production</b> Iceland, Norway</p>
        <p><b>Runtime</b> 90 min</p>
        <p><b>Expected release</b> 2023</p>
      </div>
      <div class="mt-8 md:mt-0 md:w-2/3 md:ml-14">
        <h3 class="mb-3">Synopsis</h3>
        <p>
          <i>Epilogues</i> is based on a novella by Gudbergur Bergsson, one of
          Iceland’s leading authors described by Milan Kundera as "A great
          European novelist". It tells the story of an 85 year old man who has
          recently lost his wife. By mixing his wife's ashes in a cup of hot
          water and drinking it, she appears to him, and they share memories of
          their life together.
        </p>
        <p class="mt-4">
          The film follows the old man's journey as he seeks to find solace and
          a renewed purpose in life with the assistance of his cheerful
          neighbor. Along the way, he encounters an array of unique characters,
          including a self-centered doctor, a smooth-talking coffin salesman, a
          shamanic yoga teacher, mysterious nuns, a young Faroese bride-to-be,
          and a small white dog named Shadow.
        </p>
        <p class="mt-4">
          The old man's journey is a touching exploration of grief, love, and
          the human experience.
        </p>

        <h3 class="mt-8 mb-3">About the Director</h3>
        <p>
          Ari Alexander Ergis Magnússon was born in Reykjavik to an Icelandic
          theater director and screenwriter father and a Siberian actress and
          artist mother. In 2002, Magnússon created Ergis Film Production, which
          is particularly interested in artistic documentaries and has worked
          with artists such as Björk, Erró, Alain Robbe-Grillet, David Lynch and
          Yoko Ono.
        </p>
        <p class="mt-3">
          Magnússon has collaborated with Icelandic director Fridrik Thor
          Fridriksson, producer Sigurjón Sighvatsson and Hans-Ulrich Obrist,
          co-director of exhibitions and director of international projects at
          the Serpentine Gallery in London.
        </p>
      </div>
    </div>
  </div>
  <div id="trailer">
    <div class="content-wrapper bg-white/10 w-full py-10 px-10">
      <div>
        <h3 class="mb-3">Watch the Trailer</h3>

        <div
          class="mt-2"
          style="
            left: 0;
            width: 100%;
            height: 0;
            position: relative;
            padding-bottom: 56.338%;
          "
        >
          <iframe
            src="https://player.vimeo.com/video/826636582?h=d3e0b51697&app_id=122963&byline=0&badge=0&portrait=0&title=0"
            style="
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              position: absolute;
              border: 0;
            "
            allowfullscreen
            scrolling="no"
            allow="encrypted-media;"
          ></iframe>
        </div>
      </div>
      <!-- <div>
        <h3 class="mt-8 mb-3">Gallery</h3>
        <div class="w-full flex flex-wrap">
          <img
            class="border border-4 border-white mr-2 mb-2"
            src="https://placehold.co/110x110/000/FFF"
          />
          <img
            class="border border-4 border-white mr-2 mb-2"
            src="https://placehold.co/110x110/000/FFF"
          />
          <img
            class="border border-4 border-white mr-2 mb-2"
            src="https://placehold.co/110x110/000/FFF"
          />
          <img
            class="border border-4 border-white mr-2 mb-2"
            src="https://placehold.co/110x110/000/FFF"
          />
          <img
            class="border border-4 border-white"
            src="https://placehold.co/110x110/000/FFF"
          />
        </div>
      </div> -->
    </div>
  </div>
  <div id="contact" class="content-wrapper flex w-full py-16 bg-black/90 px-10">
    <div class="sidebar">
      <h3 class="mb-3">Icelandic Film Corporation</h3>
      <p class="flex justify-between">
        <b class="mr-2">Contact Name</b> Fridrik Thór Fridriksson
      </p>
      <p class="flex justify-between">
        <b class="mr-2">Email</b>
        <a class="text-white underline" href="mailto:f.thor@icecorp.is"
          >f.thor@icecorp.is</a
        >
      </p>

      <p class="flex justify-between">
        <b class="mr-2">Phone</b> +354 562 3580
      </p>
      <p class="flex justify-between">
        <b class="mr-2">Address</b> Hverfisgata 54. 101 Reykjavík
      </p>

      <h3 class="mt-10 mb-3">Harald House</h3>
      <p class="flex justify-between">
        <b class="mr-2">Contact Name</b> Kristian Van der Heyden
      </p>
      <p class="flex justify-between">
        <b class="mr-2">Email</b>
        <a class="text-white underline" href="mailto:office@haraldhouse.com"
          >office@haraldhouse.com</a
        >
      </p>
      <p class="flex justify-between">
        <b class="mr-2">Phone</b> +32 485127750
      </p>

      <p class="flex justify-between"><b>Address</b>Antwerp, Belgium</p>
    </div>
    <div class="mt-10 md:mt-0 md:w-2/3 md:ml-20">
      <h3 class="mb-3">Contact Us</h3>

      <div class="mt-6">
        <NetlifyForm />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: "Orpheus";
  src: local("Orpheus"), url(./assets/Orpheus.woff) format("woff");
}

@font-face {
  font-family: "orpheuspro";
  src: url("./assets/fonts/orpheus-pro.woff2") format("woff2"),
    url("./assets/fonts/orpheus-pro.woff") format("woff"),
    url("./assets/fonts/orpheus-pro.oft") format("opentype");
  font-display: auto;
  font-style: normal;
  font-weight: 400;
}

.contents {
  @apply w-full flex flex-col;
}

.content {
  @apply bg-black;
}

.content-wrapper {
  max-width: 1000px;
  @apply mx-auto;
}

h2,
h3 {
  font-family: "orpheuspro";
  font-style: normal;
  color: white;
  font-weight: 400 !important;
}

.trailer-section {
  @apply bg-white/10 py-6;
  .wrapper {
    max-width: 1200px;
    @apply mx-auto  flex;
  }
}

h3 {
  @apply text-3xl;
}
p {
  font-family: "Helvetica";

  color: white;
}
.sidebar {
  p {
    color: white;
    @apply border-b flex justify-between border-white/20  pb-2 mb-2;
  }
}

header {
  p {
    font-family: "orpheuspro";
  }
  a.button {
    @apply text-white font-bold text-lg border-white/20 text-left  mr-6 border-b  py-3 md:py-0 md:pb-2;
    &:hover {
      @apply border-white/90;
    }
  }
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
header {
  display: flex;
  position: relative;
  place-items: center;
  overflow: hidden;
}

header:after {
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 140%;
}

@media (min-width: 840px) {
  .sidebar {
    min-width: 350px;
  }
  header {
    line-height: 1.5;
    top: 0;
    left: 0;
    width: 100%;
    height: 550px;
    background-attachment: fixed !important;
    background-position: center 120% !important;
    background: url(./assets/epilogues.jpg);
    clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
  }
  header .wrapper {
    display: flex;
    width: 1080px;
    @apply mx-auto pl-20 text-left p-10;
    place-items: flex-start;
    flex-wrap: wrap;
    position: relative;
    z-index: 9999;
  }
}

@media (max-width: 840px) {
  header {
    line-height: 1.5;
    top: 0;
    left: 0;
    width: 100%;
    height: 550px;
    background-attachment: fixed !important;
    background-position: -850px -380px !important;
    @apply flex flex-col pb-20 px-10;
    justify-content: end;
    background: url(./assets/epilogues.jpg);
    clip-path: polygon(0 0, 100% 0%, 100% 95%, 0% 100%);
  }
  header .wrapper {
    @apply flex ml-0 w-full;
    position: relative;
    z-index: 9999;
  }
  .content-wrapper {
    @apply flex flex-col;
  }
}
</style>
