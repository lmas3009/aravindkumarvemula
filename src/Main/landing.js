import React from 'react';
import './main.css'
import {Link,browserHistory,IndexRoute,BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Button,Navbar,Nav,Form } from 'react-bootstrap';

class Landing extends React.Component{
    render(){
    return (
        <div className="back">
        <Router browserHistory>
       <svg id="logo" width={970} height={273} viewBox="0 0 970 273" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.52289 96.028C3.52289 94.5967 5.59455 89.2857 9.73789 80.095C13.8812 70.829 18.6649 60.2447 24.0889 48.342C29.5882 36.364 33.3172 27.8137 35.2759 22.691L37.7619 16.25C36.5566 14.442 35.2382 12.8223 33.8069 11.391C36.1422 10.487 38.3646 10.035 40.4739 10.035C45.2199 10.035 48.9112 13.0483 51.5479 19.075C53.2052 22.917 55.4276 31.505 58.2149 44.839C58.2902 44.9897 58.4032 45.4793 58.5539 46.308C58.7046 47.1367 59.4579 50.9787 60.8139 57.834C62.2452 64.614 63.2246 69.134 63.7519 71.394C64.2792 73.5787 65.1832 76.9687 66.4639 81.564C68.4979 89.3233 71.0592 95.35 74.1479 99.644C70.6072 101.753 67.6692 102.808 65.3339 102.808C63.0739 102.808 61.4166 102.13 60.3619 100.774C59.3826 99.3427 58.4409 97.1957 57.5369 94.333C56.7082 91.395 54.9002 83.2967 52.1129 70.038C50.4556 72.5993 47.1409 73.9553 42.1689 74.106L22.0549 74.897C17.7609 86.4983 14.6346 96.4423 12.6759 104.729C6.57389 102.168 3.52289 99.2673 3.52289 96.028ZM41.7169 26.307C33.0536 46.873 27.5166 60.2447 25.1059 66.422H51.3219C47.7812 49.1707 44.5796 35.799 41.7169 26.307Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M97.3729 102.921C93.9829 102.921 91.4593 102.168 89.8019 100.661C88.1446 99.079 87.3159 96.5553 87.3159 93.09C87.3159 89.5493 88.5589 78.852 91.0449 60.998C93.6063 43.0687 94.8869 30.2997 94.8869 22.691C94.8869 15.007 94.3596 9.99734 93.3049 7.662C99.3316 8.26467 103.249 11.2403 105.057 16.589C110.632 13.5757 116.734 12.069 123.363 12.069C129.992 12.069 135.379 14.216 139.522 18.51C143.665 22.7287 145.737 27.663 145.737 33.313C145.737 38.8877 144.042 44.0857 140.652 48.907C137.337 53.653 132.252 57.156 125.397 59.416L126.979 64.275C129.691 72.4863 133.608 80.66 138.731 88.796C143.854 96.8567 148.035 102.356 151.274 105.294C149.692 106.047 147.394 106.424 144.381 106.424C141.443 106.424 138.354 105.106 135.115 102.469C131.951 99.8323 129.051 96.1033 126.414 91.282C121.894 82.8447 117.826 72.976 114.21 61.676C111.498 61.8267 109.426 61.902 107.995 61.902L107.656 57.834C116.093 57.5327 122.61 55.0843 127.205 50.489C131.876 45.8937 134.211 40.4697 134.211 34.217C134.211 30.2243 132.855 26.9097 130.143 24.273C127.506 21.6363 123.928 20.318 119.408 20.318C114.888 20.318 110.443 21.109 106.074 22.691C106.074 25.629 104.982 35.1587 102.797 51.28C100.688 67.4013 99.6329 80.8483 99.6329 91.621C99.6329 96.367 99.8589 100.058 100.311 102.695C98.5029 102.846 97.5236 102.921 97.3729 102.921Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M152.608 96.028C152.608 94.5967 154.68 89.2857 158.823 80.095C162.966 70.829 167.75 60.2447 173.174 48.342C178.673 36.364 182.402 27.8137 184.361 22.691L186.847 16.25C185.642 14.442 184.323 12.8223 182.892 11.391C185.227 10.487 187.45 10.035 189.559 10.035C194.305 10.035 197.996 13.0483 200.633 19.075C202.29 22.917 204.513 31.505 207.3 44.839C207.375 44.9897 207.488 45.4793 207.639 46.308C207.79 47.1367 208.543 50.9787 209.899 57.834C211.33 64.614 212.31 69.134 212.837 71.394C213.364 73.5787 214.268 76.9687 215.549 81.564C217.583 89.3233 220.144 95.35 223.233 99.644C219.692 101.753 216.754 102.808 214.419 102.808C212.159 102.808 210.502 102.13 209.447 100.774C208.468 99.3427 207.526 97.1957 206.622 94.333C205.793 91.395 203.985 83.2967 201.198 70.038C199.541 72.5993 196.226 73.9553 191.254 74.106L171.14 74.897C166.846 86.4983 163.72 96.4423 161.761 104.729C155.659 102.168 152.608 99.2673 152.608 96.028ZM190.802 26.307C182.139 46.873 176.602 60.2447 174.191 66.422H200.407C196.866 49.1707 193.665 35.799 190.802 26.307Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M258.431 101C257.979 101.226 256.812 101.527 254.928 101.904C253.12 102.356 251.425 102.582 249.843 102.582C248.337 102.582 247.47 102.017 247.244 100.887C245.888 96.2163 243.854 87.101 241.142 73.541C238.43 59.9057 235.681 47.551 232.893 36.477C230.181 25.403 227.545 18.058 224.983 14.442C228.147 12.4833 230.784 11.504 232.893 11.504C236.811 11.504 239.523 13.7263 241.029 18.171C242.611 22.6157 245.173 34.7443 248.713 54.557C248.939 56.365 250.032 62.0527 251.99 71.62C254.024 81.112 255.267 87.101 255.719 89.587C260.691 78.5883 266.228 63.936 272.33 45.63C278.432 27.2487 281.483 15.3083 281.483 9.809C288.866 11.165 292.557 13.9523 292.557 18.171C292.557 21.2597 290.41 27.8137 286.116 37.833C281.898 47.777 276.775 59.2653 270.748 72.298C264.797 85.2553 260.691 94.8227 258.431 101Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M323.421 14.442C324.175 15.798 324.664 17.1163 324.89 18.397C325.116 19.6023 325.229 21.7117 325.229 24.725C325.229 27.7383 323.986 37.7577 321.5 54.783C319.014 71.8083 317.771 83.7487 317.771 90.604C317.771 97.384 318.299 102.017 319.353 104.503C314.683 102.846 311.368 100.623 309.409 97.836C307.526 94.9733 306.584 91.6587 306.584 87.892C306.584 84.05 307.375 76.2907 308.957 64.614C311.745 45.2533 313.138 30.262 313.138 19.64C313.138 17.38 312.988 14.2913 312.686 10.374C318.412 10.6753 321.99 12.0313 323.421 14.442Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M355.937 92.186C355.937 94.5213 356.088 97.6477 356.389 101.565C348.555 101.565 344.637 99.192 344.637 94.446C344.637 93.6927 346.069 83.4473 348.931 63.71C351.869 43.9727 353.338 30.262 353.338 22.578L352.66 21.561C351.304 19.527 349.986 18.058 348.705 17.154C347.5 16.25 346.37 15.4967 345.315 14.894C344.261 14.216 343.658 13.8017 343.507 13.651C346.596 11.4663 349.609 10.374 352.547 10.374C357.821 10.374 361.964 12.634 364.977 17.154C369.271 23.708 376.541 37.5317 386.786 58.625C393.416 72.2603 398.501 81.677 402.041 86.875C402.192 82.2043 403.247 72.1097 405.205 56.591C407.164 41.0723 408.143 28.7553 408.143 19.64C408.143 17.3047 407.993 14.2537 407.691 10.487C415.451 10.487 419.33 12.7847 419.33 17.38C419.33 18.2087 417.899 28.7177 415.036 48.907C412.174 69.0963 410.742 83.0707 410.742 90.83C410.742 93.6173 410.818 95.6513 410.968 96.932C411.571 97.4593 412.55 98.0997 413.906 98.853C409.989 101.866 406.373 103.373 403.058 103.373C399.744 103.373 396.806 101.151 394.244 96.706C392.964 94.8227 390.515 90.4533 386.899 83.598C374.168 59.2653 365.693 43.4077 361.474 36.025C361.324 37.833 360.344 45.5547 358.536 59.19C356.804 72.8253 355.937 83.824 355.937 92.186Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M474.507 10.374C484.903 10.374 493.077 14.4797 499.028 22.691C504.979 30.9023 507.955 41.223 507.955 53.653C507.955 66.309 504.527 77.4583 497.672 87.101C494.357 91.847 489.875 95.6513 484.225 98.514C478.65 101.301 472.85 102.695 466.823 102.695C460.872 102.695 455.598 102.055 451.003 100.774C446.483 99.4933 443.206 98.2127 441.172 96.932L438.008 95.011C438.083 94.4083 438.912 88.796 440.494 78.174C443.809 56.026 445.466 35.9497 445.466 17.945C445.466 11.9937 444.939 7.77501 443.884 5.289C450.137 7.39833 454.054 10.713 455.636 15.233C462.341 11.9937 468.631 10.374 474.507 10.374ZM451.116 93.09C454.431 94.22 458.461 94.785 463.207 94.785C467.953 94.785 472.548 93.5797 476.993 91.169C481.438 88.683 485.016 85.406 487.728 81.338C493.303 73.1267 496.09 63.8607 496.09 53.54C496.09 43.2193 493.792 34.895 489.197 28.567C484.602 22.239 478.424 19.075 470.665 19.075C465.467 19.075 460.947 19.9413 457.105 21.674C457.105 26.3447 456.088 38.0967 454.054 56.93C452.095 75.7633 451.116 87.8167 451.116 93.09Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M578.223 14.442C578.977 15.798 579.466 17.1163 579.692 18.397C579.918 19.6023 580.031 21.7117 580.031 24.725C580.031 27.7383 579.09 35.686 577.206 48.568L575.737 58.738C598.865 39.8293 613.178 23.821 618.677 10.713C620.41 14.1783 621.276 18.0957 621.276 22.465C621.276 26.759 619.054 31.2413 614.609 35.912C610.165 40.5827 603.611 46.0067 594.947 52.184C599.166 65.3673 603.347 75.5373 607.49 82.694C611.634 89.7753 616.945 96.7437 623.423 103.599C621.917 104.352 619.92 104.729 617.434 104.729C614.948 104.729 612.236 103.825 609.298 102.017C606.436 100.209 603.874 97.949 601.614 95.237C599.43 92.525 597.207 89.022 594.947 84.728C591.482 78.2493 587.904 69.925 584.212 59.755C583.836 60.0563 582.442 61.0357 580.031 62.693C577.696 64.275 575.926 65.518 574.72 66.422C573.289 77.3453 572.573 85.8203 572.573 91.847C572.573 97.7983 573.101 102.017 574.155 104.503C569.485 102.846 566.17 100.623 564.211 97.836C562.328 94.9733 561.386 91.6587 561.386 87.892C561.386 84.05 562.177 76.2907 563.759 64.614C566.547 45.2533 567.94 30.262 567.94 19.64C567.94 17.38 567.79 14.2913 567.488 10.374C573.214 10.6753 576.792 12.0313 578.223 14.442Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M700.478 14.442C701.231 15.798 701.721 17.1163 701.947 18.397C702.173 19.6023 702.286 21.7117 702.286 24.725C702.286 27.7383 701.043 37.7577 698.557 54.783C696.071 71.8083 694.828 83.7487 694.828 90.604C694.828 97.384 695.355 102.017 696.41 104.503C691.739 102.846 688.424 100.623 686.466 97.836C684.582 94.9733 683.641 91.169 683.641 86.423C683.641 84.0877 683.716 82.2043 683.867 80.773C677.463 95.7643 668.009 103.26 655.504 103.26C649.251 103.26 644.543 101.113 641.379 96.819C638.215 92.4497 636.633 85.5567 636.633 76.14C636.633 70.7913 637.461 61.1487 639.119 47.212C640.851 33.2753 641.718 24.2353 641.718 20.092C641.718 15.8733 641.303 12.634 640.475 10.374C644.995 12.0313 648.234 14.1783 650.193 16.815C652.151 19.4517 653.131 23.1053 653.131 27.776C653.131 32.3713 652.302 39.8293 650.645 50.15C649.063 60.3953 648.272 68.8327 648.272 75.462C648.272 82.0913 649.326 86.8373 651.436 89.7C653.545 92.5627 656.558 93.994 660.476 93.994C664.544 93.994 668.536 92.2613 672.454 88.796C677.426 84.3513 681.418 77.1193 684.432 67.1C686.164 61.3747 687.483 54.8207 688.387 47.438C688.387 47.212 688.462 47.099 688.613 47.099C688.839 47.099 689.328 47.5887 690.082 48.568C690.91 49.5473 691.4 50.037 691.551 50.037L690.534 57.156C688.801 66.5727 686.579 74.445 683.867 80.773C684.168 77.7597 684.884 72.3733 686.014 64.614C688.801 45.2533 690.195 30.262 690.195 19.64C690.195 17.38 690.044 14.2913 689.743 10.374C695.468 10.6753 699.046 12.0313 700.478 14.442ZM691.664 49.585L691.551 50.037C691.626 50.037 691.664 49.8863 691.664 49.585Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M795.497 10.374C799.716 10.7507 802.73 12.069 804.538 14.329C806.346 16.5137 807.25 19.5647 807.25 23.482C807.25 27.324 806.007 37.7577 803.521 54.783C801.035 71.8083 799.792 83.7487 799.792 90.604C799.792 97.384 800.319 102.017 801.374 104.503C796.402 102.846 792.936 100.623 790.978 97.836C789.094 95.0487 788.153 91.734 788.153 87.892C788.153 84.05 788.981 75.9517 790.639 63.597C792.371 51.2423 793.501 41.8257 794.029 35.347C790.94 41.2983 785.779 49.7357 778.547 60.659C771.391 71.5823 767.247 77.948 766.117 79.756C764.309 80.8107 762.426 81.338 760.468 81.338C756.927 81.338 754.931 80.6977 754.479 79.417C753.65 77.3077 752.331 73.9553 750.523 69.36C748.791 64.6893 747.359 60.885 746.229 57.947C742.915 49.6603 739.939 42.692 737.302 37.042C737.227 37.5693 736.286 44.839 734.478 58.851C732.745 72.7877 731.879 83.8993 731.879 92.186C731.879 94.5213 732.029 97.6477 732.331 101.565C724.496 101.565 720.578 99.192 720.578 94.446C720.578 93.768 722.01 83.5603 724.872 63.823C727.81 44.0103 729.28 30.2243 729.28 22.465V21.9C727.095 18.3593 724.797 15.459 722.387 13.199C724.195 11.2403 726.417 10.261 729.054 10.261C734.176 10.261 738.282 13.1613 741.371 18.962C744.535 24.6873 751.503 41.7503 762.276 70.151C762.502 70.603 762.652 70.942 762.728 71.168C763.406 70.1133 765.251 67.4013 768.265 63.032C771.278 58.6627 773.538 55.3103 775.044 52.975C776.626 50.5643 778.774 47.1743 781.486 42.805C784.198 38.3603 786.307 34.556 787.814 31.392C792.032 22.804 794.593 15.798 795.497 10.374Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M816.262 96.028C816.262 94.5967 818.334 89.2857 822.477 80.095C826.621 70.829 831.404 60.2447 836.828 48.342C842.327 36.364 846.056 27.8137 848.015 22.691L850.501 16.25C849.296 14.442 847.977 12.8223 846.546 11.391C848.881 10.487 851.104 10.035 853.213 10.035C857.959 10.035 861.651 13.0483 864.287 19.075C865.945 22.917 868.167 31.505 870.954 44.839C871.029 44.9897 871.142 45.4793 871.293 46.308C871.444 47.1367 872.197 50.9787 873.553 57.834C874.984 64.614 875.964 69.134 876.491 71.394C877.018 73.5787 877.922 76.9687 879.203 81.564C881.237 89.3233 883.798 95.35 886.887 99.644C883.346 101.753 880.409 102.808 878.073 102.808C875.813 102.808 874.156 102.13 873.101 100.774C872.122 99.3427 871.18 97.1957 870.276 94.333C869.447 91.395 867.64 83.2967 864.852 70.038C863.195 72.5993 859.88 73.9553 854.908 74.106L834.794 74.897C830.5 86.4983 827.374 96.4423 825.415 104.729C819.313 102.168 816.262 99.2673 816.262 96.028ZM854.456 26.307C845.793 46.873 840.256 60.2447 837.845 66.422H864.061C860.52 49.1707 857.319 35.799 854.456 26.307Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M910.112 102.921C906.722 102.921 904.199 102.168 902.541 100.661C900.884 99.079 900.055 96.5553 900.055 93.09C900.055 89.5493 901.298 78.852 903.784 60.998C906.346 43.0687 907.626 30.2997 907.626 22.691C907.626 15.007 907.099 9.99734 906.044 7.662C912.071 8.26467 915.988 11.2403 917.796 16.589C923.371 13.5757 929.473 12.069 936.102 12.069C942.732 12.069 948.118 14.216 952.261 18.51C956.405 22.7287 958.476 27.663 958.476 33.313C958.476 38.8877 956.781 44.0857 953.391 48.907C950.077 53.653 944.992 57.156 938.136 59.416L939.718 64.275C942.43 72.4863 946.348 80.66 951.47 88.796C956.593 96.8567 960.774 102.356 964.013 105.294C962.431 106.047 960.134 106.424 957.12 106.424C954.182 106.424 951.094 105.106 947.854 102.469C944.69 99.8323 941.79 96.1033 939.153 91.282C934.633 82.8447 930.565 72.976 926.949 61.676C924.237 61.8267 922.166 61.902 920.734 61.902L920.395 57.834C928.833 57.5327 935.349 55.0843 939.944 50.489C944.615 45.8937 946.95 40.4697 946.95 34.217C946.95 30.2243 945.594 26.9097 942.882 24.273C940.246 21.6363 936.667 20.318 932.147 20.318C927.627 20.318 923.183 21.109 918.813 22.691C918.813 25.629 917.721 35.1587 915.536 51.28C913.427 67.4013 912.372 80.8483 912.372 91.621C912.372 96.367 912.598 100.058 913.05 102.695C911.242 102.846 910.263 102.921 910.112 102.921Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M286.626 264C286.174 264.226 285.007 264.527 283.123 264.904C281.315 265.356 279.62 265.582 278.038 265.582C276.532 265.582 275.665 265.017 275.439 263.887C274.083 259.216 272.049 250.101 269.337 236.541C266.625 222.906 263.876 210.551 261.088 199.477C258.376 188.403 255.74 181.058 253.178 177.442C256.342 175.483 258.979 174.504 261.088 174.504C265.006 174.504 267.718 176.726 269.224 181.171C270.806 185.616 273.368 197.744 276.908 217.557C277.134 219.365 278.227 225.053 280.185 234.62C282.219 244.112 283.462 250.101 283.914 252.587C288.886 241.588 294.423 226.936 300.525 208.63C306.627 190.249 309.678 178.308 309.678 172.809C317.061 174.165 320.752 176.952 320.752 181.171C320.752 184.26 318.605 190.814 314.311 200.833C310.093 210.777 304.97 222.265 298.943 235.298C292.992 248.255 288.886 257.823 286.626 264Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M369.583 225.58L359.526 225.467C355.835 225.467 353.01 225.542 351.051 225.693C349.846 236.39 349.243 245.995 349.243 254.508C366.645 254.508 379.226 253.378 386.985 251.118C386.458 255.487 384.951 258.877 382.465 261.288C380.055 263.699 377.004 264.904 373.312 264.904C372.258 264.904 368.981 264.64 363.481 264.113C358.057 263.661 352.784 263.435 347.661 263.435C342.539 263.435 337.416 263.925 332.293 264.904C332.896 262.418 334.327 260.271 336.587 258.463C336.512 258.011 336.474 256.58 336.474 254.169C336.474 251.758 337.567 242.831 339.751 227.388C337.642 227.915 335.834 228.48 334.327 229.083C334.177 227.727 334.101 226.635 334.101 225.806C334.101 221.211 336.437 218.348 341.107 217.218C342.84 204.562 343.782 194.467 343.932 186.934C341.974 186.783 340.58 186.294 339.751 185.465C338.998 184.636 338.621 183.167 338.621 181.058C338.621 178.873 338.923 176.952 339.525 175.295C347.285 176.35 355.722 176.877 364.837 176.877C373.953 176.877 382.654 176.048 390.94 174.391C390.488 177.254 389.434 179.589 387.776 181.397C386.194 183.13 383.633 184.373 380.092 185.126C376.552 185.879 373.614 186.331 371.278 186.482C367.06 186.859 361.862 187.047 355.684 187.047C355.609 189.759 354.441 199.665 352.181 216.766C356.852 216.917 360.242 216.992 362.351 216.992C368.981 216.992 373.689 215.9 376.476 213.715C376.627 214.92 376.702 215.9 376.702 216.653C376.702 222.604 374.329 225.58 369.583 225.58Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M479.064 173.374C483.283 173.751 486.296 175.069 488.104 177.329C489.912 179.514 490.816 182.565 490.816 186.482C490.816 190.324 489.573 200.758 487.087 217.783C484.601 234.808 483.358 246.749 483.358 253.604C483.358 260.384 483.886 265.017 484.94 267.503C479.968 265.846 476.503 263.623 474.544 260.836C472.661 258.049 471.719 254.734 471.719 250.892C471.719 247.05 472.548 238.952 474.205 226.597C475.938 214.242 477.068 204.826 477.595 198.347C474.507 204.298 469.346 212.736 462.114 223.659C454.958 234.582 450.814 240.948 449.684 242.756C447.876 243.811 445.993 244.338 444.034 244.338C440.494 244.338 438.497 243.698 438.045 242.417C437.217 240.308 435.898 236.955 434.09 232.36C432.358 227.689 430.926 223.885 429.796 220.947C426.482 212.66 423.506 205.692 420.869 200.042C420.794 200.569 419.852 207.839 418.044 221.851C416.312 235.788 415.445 246.899 415.445 255.186C415.445 257.521 415.596 260.648 415.897 264.565C408.063 264.565 404.145 262.192 404.145 257.446C404.145 256.768 405.577 246.56 408.439 226.823C411.377 207.01 412.846 193.224 412.846 185.465V184.9C410.662 181.359 408.364 178.459 405.953 176.199C407.761 174.24 409.984 173.261 412.62 173.261C417.743 173.261 421.849 176.161 424.937 181.962C428.101 187.687 435.07 204.75 445.842 233.151C446.068 233.603 446.219 233.942 446.294 234.168C446.972 233.113 448.818 230.401 451.831 226.032C454.845 221.663 457.105 218.31 458.611 215.975C460.193 213.564 462.34 210.174 465.052 205.805C467.764 201.36 469.874 197.556 471.38 194.392C475.599 185.804 478.16 178.798 479.064 173.374Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M574.07 177.442C574.823 178.798 575.313 180.116 575.539 181.397C575.765 182.602 575.878 184.712 575.878 187.725C575.878 190.738 574.635 200.758 572.149 217.783C569.663 234.808 568.42 246.749 568.42 253.604C568.42 260.384 568.947 265.017 570.002 267.503C565.331 265.846 562.017 263.623 560.058 260.836C558.175 257.973 557.233 254.169 557.233 249.423C557.233 247.088 557.308 245.204 557.459 243.773C551.056 258.764 541.601 266.26 529.096 266.26C522.843 266.26 518.135 264.113 514.971 259.819C511.807 255.45 510.225 248.557 510.225 239.14C510.225 233.791 511.054 224.149 512.711 210.212C514.444 196.275 515.31 187.235 515.31 183.092C515.31 178.873 514.896 175.634 514.067 173.374C518.587 175.031 521.826 177.178 523.785 179.815C525.744 182.452 526.723 186.105 526.723 190.776C526.723 195.371 525.894 202.829 524.237 213.15C522.655 223.395 521.864 231.833 521.864 238.462C521.864 245.091 522.919 249.837 525.028 252.7C527.137 255.563 530.151 256.994 534.068 256.994C538.136 256.994 542.129 255.261 546.046 251.796C551.018 247.351 555.011 240.119 558.024 230.1C559.757 224.375 561.075 217.821 561.979 210.438C561.979 210.212 562.054 210.099 562.205 210.099C562.431 210.099 562.921 210.589 563.674 211.568C564.503 212.547 564.992 213.037 565.143 213.037L564.126 220.156C562.393 229.573 560.171 237.445 557.459 243.773C557.76 240.76 558.476 235.373 559.606 227.614C562.393 208.253 563.787 193.262 563.787 182.64C563.787 180.38 563.636 177.291 563.335 173.374C569.06 173.675 572.639 175.031 574.07 177.442ZM565.256 212.585L565.143 213.037C565.218 213.037 565.256 212.886 565.256 212.585Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M598.126 257.22C597.448 255.412 597.109 252.888 597.109 249.649C597.109 246.41 598.201 236.842 600.386 220.947C602.57 205.052 603.663 192.283 603.663 182.64C603.663 180.38 603.512 177.291 603.211 173.374C608.936 173.675 612.514 175.031 613.946 177.442C614.699 178.798 615.189 180.116 615.415 181.397C615.641 182.602 615.754 184.561 615.754 187.273C615.754 189.91 614.511 199.967 612.025 217.444C609.614 234.846 608.371 247.238 608.296 254.621C608.672 254.546 609.35 254.508 610.33 254.508C626.602 254.508 638.73 253.378 646.716 251.118C646.188 255.487 644.682 258.877 642.196 261.288C639.785 263.699 636.734 264.904 633.043 264.904C631.988 264.904 628.711 264.64 623.212 264.113C617.788 263.661 612.514 263.435 607.392 263.435C602.269 263.435 597.146 263.925 592.024 264.904C593.003 261.589 595.037 259.028 598.126 257.22Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
            <path d="M646.928 259.028C646.928 257.597 648.999 252.286 653.143 243.095C657.286 233.829 662.07 223.245 667.494 211.342C672.993 199.364 676.722 190.814 678.681 185.691L681.167 179.25C679.961 177.442 678.643 175.822 677.212 174.391C679.547 173.487 681.769 173.035 683.879 173.035C688.625 173.035 692.316 176.048 694.953 182.075C696.61 185.917 698.832 194.505 701.62 207.839C701.695 207.99 701.808 208.479 701.959 209.308C702.109 210.137 702.863 213.979 704.219 220.834C705.65 227.614 706.629 232.134 707.157 234.394C707.684 236.579 708.588 239.969 709.869 244.564C711.903 252.323 714.464 258.35 717.553 262.644C714.012 264.753 711.074 265.808 708.739 265.808C706.479 265.808 704.821 265.13 703.767 263.774C702.787 262.343 701.846 260.196 700.942 257.333C700.113 254.395 698.305 246.297 695.518 233.038C693.86 235.599 690.546 236.955 685.574 237.106L665.46 237.897C661.166 249.498 658.039 259.442 656.081 267.729C649.979 265.168 646.928 262.267 646.928 259.028ZM685.122 189.307C676.458 209.873 670.921 223.245 668.511 229.422H694.727C691.186 212.171 687.984 198.799 685.122 189.307Z" stroke="white" strokeWidth={6} mask="url(#path-1-outside-1)" />
        </svg>
        <Link className="link" to="/Home"><Button id="start" onClick="window.location.href=window.location.href"  variant="success">Get Started</Button></Link>
        </Router>
        </div>
    );
    }
}
export default Landing;