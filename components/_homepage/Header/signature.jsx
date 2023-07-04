import { motion } from "framer-motion";

const svgVariants = {
  start: {
    // opacity: 0,
    pathLength: 0,
  },
  finished: {
    // opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};

export default function SignatureComponent() {
  return (
    <div className="signature z-20 absolute -top-[30px] xl:bottom-0 lg:top-[unset] max-w-[700px]">
      <svg
        width="1548"
        height="552"
        viewBox="0 0 1548 552"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        {/* <g clip-path="url(#clip0_703_548)" stroke="none" strokeWidth="1" fill="none"> */}
        <motion.path
          d="M850.884 5.15909C767.808 19.0881 652.74 99.0507 618.684 166.632C607.332 188.299 607.332 217.189 618.684 220.8C623.844 222.864 624.876 219.768 622.296 209.451C611.46 166.116 695.568 76.8675 785.352 36.6283C830.244 16.5086 868.428 8.77029 913.32 11.3497C946.344 12.8974 952.02 14.961 962.856 27.3423C995.364 65.518 955.632 157.862 866.88 249.174L826.116 291.477L825.6 173.854C825.6 73.2563 824.568 56.7479 817.86 56.7479C812.7 56.7479 810.12 61.9068 810.12 72.7404C810.12 81.5105 807.54 93.3759 804.444 99.0507C800.832 105.757 800.316 110.916 803.928 112.98C806.508 114.527 810.636 156.83 812.7 206.871L816.312 297.668L788.964 315.724C773.484 325.525 755.94 336.875 749.232 339.97C732.204 349.256 739.944 355.963 767.808 355.963C817.344 355.963 815.28 352.868 815.28 433.862C815.28 478.228 817.344 505.57 820.44 505.57C823.536 505.57 825.6 477.712 825.6 432.83V360.09L860.688 363.185C988.14 375.567 1071.22 392.075 1066.06 403.94C1050.58 441.6 1045.93 464.815 1051.61 477.196C1056.77 488.03 1060.9 490.61 1072.25 489.062C1083.08 488.03 1088.76 482.355 1098.05 464.299C1110.43 439.537 1113.53 394.139 1104.24 376.598C1100.11 368.86 1103.72 362.669 1124.36 341.002C1138.3 326.557 1152.23 314.692 1155.32 314.692C1158.42 314.692 1161 321.398 1161 329.653C1161 361.638 1182.16 361.122 1216.73 328.621L1233.24 312.628V331.2C1233.24 341.518 1235.3 351.32 1237.88 352.868C1244.59 356.995 1248.2 337.391 1245.11 316.755C1242.01 298.699 1236.34 294.056 1231.69 306.438C1228.6 314.692 1185.25 345.645 1177 345.645C1173.9 345.645 1171.32 335.327 1171.32 322.43C1171.32 309.533 1169.77 299.215 1168.22 299.215C1161 299.215 1115.08 336.359 1107.34 348.225C1100.11 359.058 1097.53 360.09 1088.76 354.931C1079.47 348.74 1079.47 348.225 1092.37 335.843C1119.72 307.985 1124.88 280.643 1099.6 294.056C1093.92 296.636 1083.6 299.215 1076.89 299.215C1070.18 299.215 1056.25 306.438 1046.96 314.692C1024.26 335.327 1002.07 347.193 995.364 342.55C991.752 340.486 990.72 331.2 992.784 319.335C995.364 303.342 994.332 299.215 988.14 299.215C984.012 299.215 980.4 302.311 980.4 305.922C980.4 314.692 920.028 347.193 910.74 343.582C899.388 339.454 901.452 332.748 915.9 326.041C930.348 319.335 933.444 300.763 921.06 295.604C899.904 287.866 883.392 330.684 900.936 348.225C910.74 358.026 922.608 355.447 956.148 335.327C977.304 322.43 980.4 321.398 980.4 329.653C980.4 334.296 983.496 343.066 987.624 348.225C993.816 356.479 996.912 356.995 1007.75 352.352C1014.97 348.74 1029.94 338.423 1040.77 328.621C1059.35 312.112 1099.08 299.731 1099.08 310.565C1099.08 312.628 1090.82 323.462 1081.02 334.811C1071.22 345.645 1062.96 355.963 1062.96 357.51C1062.96 358.542 1068.64 361.638 1075.86 363.185C1090.82 366.796 1091.34 369.892 1081.02 383.821C1074.31 392.591 1072.25 393.107 1054.19 385.368C1030.45 376.082 875.136 350.804 841.596 350.804C826.116 350.804 825.6 349.772 825.6 328.105C825.6 306.438 827.664 303.342 859.656 272.389C954.084 182.109 1005.17 74.2881 975.756 27.3423C959.76 2.06375 915.9 -5.67456 850.884 5.15909ZM815.28 331.716C815.28 348.225 815.28 348.225 792.06 346.677L768.84 344.613L787.932 330.168C813.216 311.081 815.28 311.081 815.28 331.716ZM1099.08 405.488C1099.08 432.314 1088.76 467.91 1078.44 477.196C1070.7 484.419 1069.15 484.419 1062.96 477.196C1054.7 467.395 1059.35 444.18 1075.86 408.583C1089.79 378.662 1099.08 377.114 1099.08 405.488Z"
          fill="transparent"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
          variants={svgVariants}
          initial="start"
          animate="finished"
        />
        <motion.path
          d="M224.46 54.1682C160.992 71.1925 97.5238 109.884 50.0518 159.409C7.73978 203.776 -12.3842 254.849 9.80378 262.071C14.9638 263.619 15.9958 261.555 13.9318 252.269C5.67578 221.832 58.8238 153.735 125.388 109.884C178.02 74.8037 233.748 56.7477 290.508 56.7477C334.368 56.7477 336.948 57.2635 351.396 71.7084C362.232 83.058 366.36 91.828 366.36 105.241C366.36 153.219 325.08 225.443 257.484 295.604L217.236 337.907L216.72 220.284C216.72 119.686 215.688 103.178 208.98 103.178C203.82 103.178 201.24 108.336 201.24 119.17C201.24 127.94 198.66 139.29 196.08 144.964C191.952 152.187 191.952 155.798 197.112 157.346C202.272 159.409 204.336 182.624 205.368 251.753L207.432 344.097L179.568 361.121C164.604 370.407 146.544 381.757 139.836 385.884C131.58 390.527 129.516 394.654 133.128 398.265C136.74 401.877 149.124 396.202 172.344 380.209L206.4 356.479V453.981C206.4 515.888 208.464 552 211.56 552C214.656 552 216.72 515.372 216.72 452.434V352.351L259.548 309.017C366.36 200.68 405.06 94.4075 350.88 57.7794C336.432 48.4934 327.144 46.4299 292.056 46.9458C268.836 46.9458 238.908 50.0411 224.46 54.1682Z"
          fill="transparent"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
          variants={svgVariants}
          initial="start"
          animate="finished"
        />
        <motion.path
          d="M1336.44 230.602V306.953L1313.74 320.882C1301.35 329.136 1288.97 335.327 1285.87 335.327C1282.78 335.327 1279.68 324.493 1278.65 310.564C1277.62 297.151 1275.04 286.318 1271.94 286.834C1264.2 287.35 1247.17 313.144 1250.27 320.366C1251.82 325.009 1254.91 321.914 1259.56 312.112L1266.78 297.151L1269.36 316.755C1273.49 347.193 1283.81 350.288 1312.7 330.684L1336.44 314.176V345.645C1336.44 369.892 1337.99 376.598 1344.18 376.598C1348.31 376.598 1351.92 374.019 1351.92 370.923C1351.92 360.606 1383.4 299.215 1388.56 299.215C1391.14 299.215 1393.2 310.564 1393.2 324.493C1393.2 338.938 1395.26 351.836 1398.36 353.383C1404.55 357.51 1423.13 347.708 1441.19 331.2C1454.6 318.303 1455.12 318.303 1455.12 328.621C1455.12 352.867 1483.5 355.963 1489.18 332.232C1491.24 323.978 1495.88 319.85 1504.14 319.85C1519.1 319.85 1548 309.533 1548 304.374C1548 302.31 1539.23 303.342 1528.91 307.469C1501.56 316.755 1492.27 316.239 1486.08 304.374C1479.37 291.993 1466.47 290.961 1462.34 301.794C1457.7 312.628 1409.71 347.193 1403.52 343.065C1400.94 341.518 1399.91 330.168 1401.97 317.271C1404.04 298.699 1403 293.54 1396.3 290.961C1384.94 286.834 1374.11 296.636 1359.66 324.493L1347.28 348.224L1346.76 251.237C1346.76 190.363 1344.7 154.766 1341.6 154.766C1338.5 154.766 1336.44 183.656 1336.44 230.602ZM1479.89 319.85C1480.92 330.684 1478.86 335.327 1473.18 335.327C1463.89 335.327 1462.86 319.335 1471.63 310.564C1475.24 306.953 1477.82 304.374 1478.34 304.374C1478.34 304.374 1479.37 311.08 1479.89 319.85Z"
          fill="transparent"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
          variants={svgVariants}
          initial="start"
          animate="finished"
        />
        <motion.path
          d="M438.6 308.501V390.011L421.572 406.52C396.288 431.282 390.096 428.703 393.708 394.654C395.772 371.955 395.256 366.281 389.064 366.281C384.936 366.281 381.84 369.892 381.84 374.019C381.84 387.432 366.36 413.226 360.684 409.615C357.588 408.068 356.04 400.845 357.588 394.139C360.684 376.598 352.428 373.503 341.076 387.948C335.4 394.139 324.048 403.94 315.276 409.099C297.732 419.417 297.216 418.901 286.896 385.884C282.768 372.471 259.548 368.344 247.68 379.178C234.78 390.527 229.62 415.806 237.36 425.608C246.648 436.957 260.064 434.894 273.48 420.449C283.8 409.099 286.38 408.583 289.992 415.29C296.7 426.639 308.052 425.092 327.144 410.131L344.172 397.234L349.848 410.131C357.072 426.124 363.264 426.639 373.584 412.195L380.808 401.361L382.872 412.71C383.904 419.417 388.548 427.155 393.192 430.251C400.416 434.378 405.576 432.314 419.508 418.901L437.052 401.877L440.148 440.568C443.76 483.903 452.016 505.57 464.4 505.57C476.784 505.57 503.616 475.649 523.224 439.021C538.188 410.647 541.284 407.552 544.38 417.353C549.024 432.83 566.568 431.282 574.308 413.742C578.436 403.94 585.144 399.297 594.948 398.266C613.008 396.202 636.744 387.432 633.648 383.821C632.1 382.789 624.876 383.821 617.136 386.916C593.916 395.686 573.792 393.623 570.18 381.757C563.988 362.669 553.668 371.439 529.416 414.774C489.168 485.451 466.464 508.15 456.144 485.967C454.08 481.324 450.984 420.965 449.952 351.836C448.92 280.643 445.824 226.991 443.244 226.991C440.664 226.991 438.6 262.071 438.6 308.501ZM273.996 392.591C278.64 401.877 277.608 405.488 269.352 414.258C255.42 427.671 240.456 422.512 245.616 406.52C253.356 380.725 264.708 375.567 273.996 392.591ZM565.02 404.972C565.02 410.131 561.924 415.29 558.828 416.322C554.7 417.869 552.12 413.742 552.12 404.972C552.12 396.202 554.7 392.075 558.828 393.107C561.924 394.654 565.02 399.813 565.02 404.972Z"
          fill="transparent"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
          variants={svgVariants}
          initial="start"
          animate="finished"
        />
        <motion.path
          d="M982.464 276C978.852 284.77 984.528 295.088 991.236 291.477C997.428 287.35 997.428 268.262 990.72 268.262C987.624 268.262 984.012 271.873 982.464 276Z"
          fill="transparent"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
          variants={svgVariants}
          initial="start"
          animate="finished"
        />
        <motion.path
          d="M1164.12 275.738C1160.51 284.508 1166.19 294.826 1172.9 291.215C1179.09 287.088 1179.09 268 1172.38 268C1169.28 268 1165.67 271.611 1164.12 275.738Z"
          fill="transparent"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
          variants={svgVariants}
          initial="start"
          animate="finished"
        />
        {/* </g> */}
        <defs>
          <clipPath id="clip0_703_548">
            <rect width="1548" height="552" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
