/*
http://raphaeljs.com/
==> http://dmitrybaranovskiy.github.io/raphael/
http://www.w3.org/TR/SVG/paths.html#PathData
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\

qhrtm@daum.net

20150226 - 지역변수 loc_xx 로 변경, 클릭한 지점 색깔 나오게 변경 
2017xxxx - 지점별 색깔 지정 가능
20170703 - svg 로 경로 변경 : 강화도, 울릉도, 독도는 표시 안됨..
*/

window.onload = function () {
    var bbs_path = "/";
    var bo_table = "branch2";

    var R = Raphael("south", 360, 500);
    var attr = {
        fill: "#fff",
        stroke: "#666",
        "stroke-width": 0.5,
        "stroke-linejoin": "round"
    };
    var aus = {};

// loc_01 ~ 17
// 서울, 부산, 대구, 인천, 광주, 대전, 울산, 세종, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주

// 서울
    aus.loc_01 = R.path("m 69.81409,129.72501 -11.326209,6.55895 -5.15118,6.20703 2.495608,4.09535 9.534484,3.58343 9.246535,1.3118 5.919069,-4.79924 0.319952,-2.23965 -8.79861,-6.07903 0.159976,-6.55898 z").attr(attr);

// 부산
    aus.loc_02 = R.path("m 224.98955,354.00953 2.39962,0.15998 6.39899,5.43914 -0.63991,3.19949 -7.99873,8.15871 -0.15997,6.87891 -8.15871,7.35884 -0.47993,0.79986 -7.51881,0.47993 -3.35947,-4.31931 -8.95858,0.63989 -1.11982,-1.9197 6.55896,-8.47865 1.59974,-3.35947 1.75973,-1.59975 5.59911,-2.23965 4.31933,-3.19949 z").attr(attr);

// 대구
    aus.loc_03 = R.path("m 168.83843,298.17837 9.27853,-2e-5 4.15935,-1.75972 3.03951,0.15998 5.59912,8.31869 0.47992,1.91969 -6.23901,8.15872 -8.63864,0.15997 -3.35947,5.27917 -0.79986,3.03952 0.79986,4.63926 0.47993,2.07967 -3.67942,0 -1.59974,-2.23965 -2.39963,0 -1.59974,1.75972 -2.39962,-1.59974 -2.07967,-4.31933 0.79987,-1.43977 4.63927,-1.27979 -0.6399,-6.07903 6.07903,-3.99937 1.9197,-1.59975 -0.31994,-3.51944 -4.95922,-1.9197 -0.47992,-2.23965 z").attr(attr);

// 인천
    aus.loc_04 = R.path("m40.724427,134.52425 7.198864,-0.47993 6.398984,0.63991 -0.479928,2.55958 -3.199492,4.95922 1.919698,5.43914 7.038888,3.35947 6.55896,1.75972 2.079674,2.07967 -3.999372,3.99938 -15.677521,-1.59975 -1.919698,-6.399 -5.919057,-9.91843 -0.159976,-7.35884z").attr(attr);

// 광주
    aus.loc_05 = R.path("m 30.140364,361.52834 11.038259,-0.15997 3.999372,1.27979 2.87954,-0.95985 1.759722,-2.71957 2.23965,-0.47992 7.518802,8.31868 -0.159975,6.07904 -1.919698,3.03952 -1.43977,3.99937 -7.838755,0 -2.23965,2.07967 -3.999371,0.15998 -2.719565,-2.71958 0.159976,-4.31931 -5.599117,-3.51944 -1.759722,0.31995 -0.959843,1.59975 -1.919698,-0.15998 0,-10.39835 z").attr(attr);

// 대전	
    aus.loc_06 = R.path("m 87.091357,248.42622 15.357573,6.23903 -1.2798,2.55958 -3.359465,2.39963 0.159976,7.99873 -8.958573,6.07905 -3.839408,-1.9197 -2.239637,0.47993 -1.279807,2.23963 -2.879541,-1.11982 -0.959842,-1.91969 0.159975,-9.91843 z").attr(attr);

// 울산
    aus.loc_07 = R.path("m 222.7499,321.37469 -11.19822,11.03825 -2.55961,4.15935 2.39963,2.23965 11.9981,5.75908 1.11982,0.79988 c 0,0 -0.15998,6.239 0.47993,6.07903 0.6399,-0.15997 3.19949,0.47993 3.19949,0.47993 l 2.5596,2.23965 1.91969,-0.79988 3.51944,-5.75908 5.91907,-1.11984 0.15998,-18.07713 -4.63927,-4.15935 -1.43978,-0.15997 -1.43977,3.51944 -2.23964,0.6399 -4.63927,-3.19949 z").attr(attr);

// 세종
    aus.loc_08 = R.path("m 85.17166,212.91185 1.599746,2.5596 2.879553,3.6794 1.599746,2.07968 0,7.03889 3.039516,3.99937 0.159976,1.43977 -5.439142,7.51881 -2.239649,1.75973 -5.439129,-8.47866 -0.959856,-2.07968 -0.479927,-13.11793 3.679419,-4.63926 z").attr(attr);

// 경기도 
    aus.loc_09 = R.path("m 72.213715,77.893208 -19.484915,3.16749 -6.047042,-8.670624 -6.050324,5.422443 -4.252049,6.479676 -3.199492,4.799238 -3.199505,0 -0.639891,7.998743 -1.599746,2.87954 -4.479299,-1.279794 -4.159335,-1.919698 0.319952,7.998728 0.959842,2.87954 -1.599746,2.5596 4.159348,2.55959 0.319939,2.5596 -1.599746,3.51945 12.797981,8.31868 6.398984,-2.23965 3.199493,6.07905 0.639903,1.27979 6.718936,-0.31995 8.638634,0.95985 10.23838,-6.07904 4.159348,4.15935 0,5.75908 8.638633,5.75909 0,4.79924 -9.598489,7.35884 -5.11919,6.39898 -16.157436,-0.95985 1.759709,8.31869 -6.079033,0 -4.159347,2.87954 2.879553,3.19951 1.919698,1.27979 2.87954,-0.95985 -0.319952,2.5596 -4.159334,4.47928 -3.199505,0.31996 -4.159335,-0.95985 0.639904,4.79924 0.959842,2.87954 7.35884,-0.6399 0,11.51819 5.11919,-2.55961 1.599746,1.59975 0.319952,1.9197 -4.799251,5.11919 17.277268,0.6399 c 0,0 0,-3.19949 1.279807,-3.19949 1.279794,0 3.519431,-0.6399 3.519431,-0.6399 l 10.878283,4.15934 7.038888,-4.15934 1.279794,-5.43915 1.599747,-1.91969 7.998742,0.31995 6.07903,-7.35884 5.43915,-1.2798 1.91969,-5.11919 0.95985,-9.27852 5.43914,-12.15808 -2.87954,-5.11919 0.31995,-3.19949 4.47929,-1.9197 -19.51692,-10.23838 0.6399,-7.67879 -3.19949,-11.83813 1.9197,-10.55833 -7.038891,-9.59847 -7.35884,-4.799242 -14.077775,-7.038888 z").attr(attr);

// 강원도 
    aus.loc_10 = R.path("m 45.977861,65.095227 1.919698,5.11919 7.038888,7.678791 19.356942,-3.039529 2.399612,10.718308 8.958586,5.11919 12.797982,7.038888 8.318681,12.797985 -1.27981,13.43787 1.9197,8.95858 -0.63989,5.43913 21.75656,11.9981 -7.03889,4.31933 2.5596,5.11919 -5.75909,12.79798 -0.95985,13.75782 6.71894,5.75908 6.39898,-17.5972 5.7591,0 7.03887,5.75908 17.27727,-0.63989 -5.11919,7.67878 16.63738,1.27979 4.47928,2.5596 7.03889,-1.9197 7.67879,3.1995 3.19949,-3.1995 7.03889,4.47929 13.43787,-1.9197 8.95859,2.5596 10.55832,-9.27852 -6.71894,-7.99874 1.27981,-7.67878 L 217.47073,157.24066 205.18468,123.80594 178.43691,84.388175 158.60005,45.25837 150.60131,32.780353 124.7494,2.8970575 121.93385,14.287271 c -2.4505,5.653786 -6.77147,8.273314 -11.90211,9.598477 l -8.54266,3.455451 -9.406518,4.959214 c -9.015497,3.062372 -1.441481,11.301579 -13.181901,11.806136 l -9.822445,8.702627 -16.73336,0.703884 c -0.842816,1.315205 -3.446165,5.577719 -6.366995,11.582167 z").attr(attr);

// 충북
    aus.loc_11 = R.path("m 87.571285,207.79266 6.079033,-3.67942 0.959855,-5.75908 8.318687,-0.15998 6.239,-7.99874 5.7591,-1.11982 8.63863,5.75909 2.07967,-0.15997 5.59911,-16.79734 3.8394,-0.31996 5.91906,4.63927 2.71957,0.79988 10.71831,-0.63991 -5.27917,7.19887 22.23648,1.75972 3.1995,2.23963 5.27916,0 -1.27979,2.71958 -11.3582,9.59848 -2.23965,9.59849 -3.99937,1.27979 -6.07904,-1.43977 -9.43851,1.11982 -8.63863,3.03952 0.6399,5.43914 -9.43851,0.79988 0.79988,10.23838 -5.27917,-2.07968 -2.39962,1.11982 0,4.31933 3.99937,3.35946 2.23965,3.99936 0,10.87829 -5.43915,7.19886 7.03889,0.95984 4.63927,3.51945 3.99937,4.4793 0.47991,2.07967 -4.79924,1.43977 -5.75908,11.9981 -11.83812,0.47992 -6.55898,-4.15934 -6.07903,-8.95858 -0.15997,-6.07904 -3.039521,-2.07967 0.159971,-7.67879 5.91906,-7.19885 -14.077774,-5.91907 -2.239637,-0.95986 -0.319952,-2.71956 3.67942,-4.95922 3.67942,-5.43914 -0.319952,-1.75972 -3.039517,-3.35947 0,-8.31868 -4.479299,-4.63926 -1.919698,-3.99937 -1.43977,-1.2798 0,-1.43977 z").attr(attr);
	
// 충남
    aus.loc_12 = R.path("m 82.932023,209.3924 c -1.759722,-0.63989 -10.398356,-3.99937 -10.398356,-3.99937 l -3.519444,2.87955 -3.359468,1.43977 -4.639275,0.15998 0,-1.43977 -2.399613,0.15998 -0.959855,3.99935 -11.838126,9.59849 0,-6.39899 -1.759722,-1.75973 0,-5.27915 -10.398356,-0.47993 -6.079033,-11.19823 -1.599746,0.47993 -0.319952,10.39835 2.879541,4.95922 -0.479915,2.07967 -7.678792,-0.31995 -5.439141,-3.51945 -1.919698,0.15998 -9.5984767,11.51817 10.0784037,10.23838 1.759722,-0.63989 2.23965,-6.07904 c 0,0 3.199492,5.27916 3.999359,5.43914 0.799879,0.15998 0.479927,14.5577 0.479927,14.5577 l 3.999372,5.59911 -0.799879,2.71958 -3.519444,4.63926 3.519444,3.67942 -0.479928,2.71956 0.159976,4.31933 1.439783,2.39961 0.959842,2.71958 -1.279794,4.63926 -1.43977,2.5596 0.799867,3.03952 6.718936,4.47928 12.957957,-4.63926 3.999359,-7.03889 12.318053,-0.6399 6.239022,7.03889 6.079032,-1.9197 1.759722,-0.15996 3.839396,0.63989 3.199492,-2.39962 2.079674,-0.95985 11.518174,14.07777 3.359468,0 1.759719,-5.91907 5.91906,-0.47991 -0.95984,-3.19949 -4.79924,-6.399 c 0,0 -0.15998,-7.5188 -0.79988,-7.19886 -0.639891,0.31995 -3.999359,0.15997 -3.999359,0.15997 l -5.759094,4.31933 -3.039516,0.79986 -2.879541,-2.23963 -2.559601,3.83939 -6.55896,-3.35948 0,-12.31804 7.358839,-11.51819 1.439771,-3.67942 -0.159976,-4.31931 -6.718936,-11.03826 -0.319952,-12.47801 5.759093,-5.91907 z").attr(attr);

// 전북
    aus.loc_13 = R.path("m 33.019917,291.93935 12.318054,-4.63927 4.479286,-7.03888 10.558332,-0.63991 6.718936,7.35884 2.719565,-0.95984 5.279165,-1.59976 4.319324,0.6399 4.31931,-2.39962 12.318054,13.59786 3.67942,0.15996 1.759717,-1.91968 0.95985,-4.79925 7.67879,-0.79987 c 0,0 4.31931,1.11982 4.15933,2.07967 -0.15997,0.95985 4.15935,1.75973 4.15935,1.75973 l 5.43914,-1.27981 2.55959,0.15997 0.31995,1.27981 0.47993,7.5188 -3.03952,1.9197 c 0,0 -6.71893,3.8394 -7.35884,5.11919 -0.6399,1.2798 -7.51881,11.3582 -7.51881,11.3582 l -5.91906,8.95859 0.15998,2.07967 2.23964,3.99937 1.75972,1.59975 0.79988,12.95794 -2.39963,6.87891 -1.9197,1.11983 -8.63863,-4.63927 -2.879541,-0.31995 -4.479286,4.79925 -4.319324,0.47991 -4.639262,-3.03951 -6.55896,0.6399 -3.359468,1.43977 -6.718936,-0.31995 -0.79988,-13.43787 -11.198222,-0.31995 -8.638634,-3.51945 -2.079674,0.47993 -5.599118,9.27852 -5.279166,3.03953 -5.599117,0.31995 -1.919698,-2.87955 -0.319939,-6.71893 7.838754,-3.99938 0,-1.43977 -14.55769,-4.95921 0.639891,-2.55959 15.197594,-11.51819 6.878912,0.31996 0.159976,-8.95859 2.079673,-3.51944 -1.599746,-1.91969 -8.478658,0.47992 -0.479927,-3.35947 z").attr(attr);

// 전남
    aus.loc_14 = R.path("m 18.142262,345.69085 0.159976,2.71956 1.599746,1.75972 0,2.39963 2.879553,1.11982 6.55896,-0.15998 5.919057,-4.31931 5.759093,-8.79861 2.399626,0.15998 6.55896,2.87954 9.758452,0.47993 1.119819,13.43787 2.239649,0.95984 6.558961,-0.31994 3.359468,-1.75972 6.079045,-0.31995 3.67942,2.87954 5.759081,-0.47993 4.959214,-4.95921 1.279807,0 10.078401,5.27916 0.95985,0.47993 -1.2798,5.11919 -1.11982,1.59975 1.43977,5.75909 7.99873,10.55833 0.47993,13.11792 -5.43914,0.15998 0,3.67942 -1.43977,1.59974 -4.47929,0.15998 -1.75972,-0.6399 -0.479927,2.23964 1.919697,1.75973 0.79987,4.15933 2.87955,-0.31995 2.71957,-0.31994 1.27979,-0.15998 0,10.23838 -3.35947,0.15998 -2.55959,-1.9197 -2.5596,0.95985 0.31995,6.87891 -2.399622,1.59974 -1.599746,-1.11981 -0.31994,-2.39963 -0.159975,-14.71767 -2.079674,0.63991 -9.918428,7.03887 -0.319952,3.8394 4.159335,7.35884 0.319951,3.03951 -0.959842,1.59975 -9.918429,8.47866 -2.239649,-0.15998 -9.598489,-5.91906 0,-1.75972 4.799251,-1.75972 0.63989,-6.07904 2.23965,0.31995 1.919698,1.75972 1.919698,-0.63989 0.479915,-7.51882 -3.199492,0.31995 -1.599747,2.07968 -4.159334,-0.6399 -1.439783,2.07967 -12.318041,3.67942 -5.599118,0.31994 0.479928,16.79735 -9.278538,0 -6.878912,-12.31805 c 0,0 -11.518174,21.91653 -12.797981,22.23648 -1.279794,0.31995 -9.918428,-0.31995 -9.918428,-0.31995 l -1.279795,-1.2798 0,-13.75782 4.159348,-3.19949 -2.399626,-2.23965 -0.159976,-3.67942 9.438514,-0.31995 -0.159976,-2.07968 -8.79861,-9.4385 1.119819,-1.59974 10.878283,-4.63927 -0.479928,-2.5596 -4.639262,-6.87891 -8.638634,6.55896 -1.119831,-0.15998 0,-16.95731 -3.6794071,0.15997 0,-2.71956 2.3996128,-3.19949 -0.4799276,-3.19951 -6.0790326,-11.67815 0.3199517,-2.87954 8.6386338,-12.15808 0,-5.27916 5.11919,-3.67942 z").attr(attr);

// 경북
    aus.loc_15 = R.path("m 184.67592,193.39493 7.19886,2.23965 3.03952,-2.55959 6.87891,3.67942 13.59785,-2.07967 8.47867,2.55958 12.31804,-10.7183 5.27917,10.87828 0.79988,10.0784 0.63989,19.83687 -1.2798,16.47739 -1.75972,13.43787 -0.63989,6.399 -0.47993,17.59721 1.2798,0.47993 0.95985,10.0784 -1.75972,4.15935 -1.27981,3.67942 9.11856,0.31994 3.03952,-2.55959 -0.15998,4.31931 -6.239,24.15618 -2.07968,-0.31994 -4.79924,-3.99937 -1.91969,-0.15998 -1.11982,3.8394 -1.9197,0.47991 -9.11856,-7.03887 -1.75972,0.47991 -10.55833,11.03826 -7.03889,0.47993 -8.15871,5.91906 -3.99936,-0.15998 -5.75909,-4.95921 -8.63864,0 -2.39962,-6.07904 1.11983,-5.27916 2.39961,-3.03953 8.47866,-0.31994 7.67879,-8.3187 -1.27979,-4.63926 -6.71894,-8.79861 -4.4793,-0.47991 -3.67942,1.43977 -10.71829,0.31995 -2.39963,5.27917 0.63991,3.83938 4.95921,2.23965 -0.47993,2.07967 -7.19886,4.31931 0.47993,5.59912 -2.5596,0.47993 -3.1995,1.9197 0.79988,3.19949 0.79987,1.9197 -8.79861,-3.51945 -5.75908,-16.15745 -10.39836,-0.31995 -4.31932,-5.43914 0,-11.19822 5.27917,-11.67815 6.23902,-2.39963 -1.11983,-3.99937 -5.91906,-7.19885 -3.35947,-0.95986 -4.15935,-0.95984 3.35947,-6.07905 0,-11.9981 c 0,0 -6.71893,-7.19886 -6.07903,-7.19886 0.63989,0 1.11982,-1.2798 1.11982,-1.2798 l 5.91907,2.39963 -1.27981,-11.19824 9.75846,-0.79986 -0.15997,-5.7591 6.55896,-2.55958 9.11855,-1.11982 6.87891,1.91969 5.43914,-2.23964 1.11983,-6.55898 1.11982,-3.99936 z").attr(attr);

// 경남
    aus.loc_16 = R.path("m 128.36483,304.41738 5.43914,5.43914 8.47866,0.47991 5.91907,14.55771 0.79987,0.95984 9.91842,3.51944 1.9197,0.15998 3.03952,3.03951 3.03953,-1.91968 0.95984,0 3.35947,2.55959 12.638,0.31995 5.91906,4.79924 4.4793,0.6399 1.9197,0.15998 4.79923,-4.63928 4.79924,-1.75972 2.71957,0.31995 -0.95985,1.9197 -1.11981,2.71956 1.43977,1.43979 1.59974,1.11982 11.51818,5.75909 1.75972,1.91968 -0.63989,5.27917 -12.79798,10.07842 -4.63927,1.27979 -2.87955,2.07967 -8.31868,14.5577 -2.07967,1.11981 -5.11919,-0.47991 -7.19886,-3.35947 -1.43978,0.31995 0.79988,6.71894 -13.9178,-0.79988 -2.87954,5.59912 0.47993,2.39961 4.63926,0 -0.79988,2.5596 -4.79924,6.39899 -0.15997,2.71957 -1.43977,0.95985 -4.95922,-2.71957 -5.75909,0 -0.31995,1.75972 -7.03888,-0.47992 -5.27916,-4.4793 0.15997,-11.03825 -3.51944,-0.31995 -3.03953,0.31995 -1.11982,4.31931 -0.79988,1.27981 -6.07903,0 -4.47929,3.99936 0.15998,-14.39772 -10.23839,-13.27791 -0.79987,-7.5188 1.75972,-5.59912 1.11982,-6.39898 1.75972,-1.9197 0.31995,-12.95796 -4.31931,-4.63926 -0.47993,-3.8394 6.07904,-9.91842 4.79925,-7.19887 6.23901,-5.5991 1.75972,-0.79988 z").attr(attr);

// 제주
    aus.loc_17 = R.path("m 50.7771,481.34939 8.318695,9.59848 6.718936,-0.6399 9.278524,0 c 0,0 7.35884,2.87954 17.277268,-1.2798 9.918427,-4.15934 11.838127,-6.39899 11.838127,-6.39899 l 6.71894,-9.59847 -0.6399,-1.9197 -8.63863,-6.71894 -9.598489,0.31994 -7.358826,3.51945 -19.83687,-0.95985 z").attr(attr);
	
//aus.ganghwa = R.path("M79,105 84,105 85,107 85,111 80,110 79,105z").attr(attr);
//aus.ulleung = R.path("M273,145 276,144 283,140 280,148 276,147 275,145 273,145 z").attr(attr);
//aus.dokdo = R.path("M312,150 316,150 315,152z M317,152 321,150 320,152z").attr(attr);


    var link =  document.location.href.split("sca=");
    var link2;
    if(link[1] !== undefined) {
        link2 =  link[1].split("&");
    } else {
        link2 = '';
    }
    //console.log(decodeURI(link2[0])); 함수만들어서 출력해도 됨.
    var current_location;
    switch(decodeURI(link2[0])) { 
        case "서울":
            current_location = "loc_01"; break;
        case "부산":
            current_location = "loc_02"; break;
        case "대구":
            current_location = "loc_03"; break;
        case "인천":
            current_location = "loc_04"; break;
        case "광주":
            current_location = "loc_05"; break;
        case "대전":
            current_location = "loc_06"; break;
        case "울산":
            current_location = "loc_07"; break;
        case "세종":
            current_location = "loc_08"; break;
        case "경기도":
            current_location = "loc_09"; break;
        case "강원도":
            current_location = "loc_10"; break;
        case "충청북도":
            current_location = "loc_11"; break;
        case "충청남도":
            current_location = "loc_12"; break;
        case "전라북도":
            current_location = "loc_13"; break;
        case "전라남도":
            current_location = "loc_14"; break;
        case "경상북도":
            current_location = "loc_15"; break;
        case "경상남도":
            current_location = "loc_16"; break;
        case "제주도":
            current_location = "loc_17"; break;
        default:
            current_location = "loc_01"; break;
    }

    var current = null;
    for (var state in aus) {
        // 클릭한 시도별 색상 설정
        aus[state].color = Raphael.getColor();
        aus['loc_01'].color = "#ffff00";
        aus['loc_02'].color = "#000000";
        aus['loc_10'].color = "#0000ff";
        //console.log(aus[state].color);
        (function (st, state) {
            st[0].style.cursor = "pointer";
            st[0].onmouseover = function () { // onover
                current && aus[current].animate({fill: "#fff", stroke: "#666"}, 500) && (document.getElementById(current).style.display = "");
                st.animate({fill: st.color, stroke: "#ccc"}, 500);
                //st.toFront();
                R.safari();
                document.getElementById(state).style.display = "block";
                current = state;
            }
			
            st[0].onmouseout = function () {
                st.animate({fill: "#fff", stroke: "#666"}, 500);
                //aus[current_location].animate({fill: aus[current_location].color, stroke: "#666"}, 500);
                //document.getElementById(current_location).style.display = "block";
                //st.toFront();
                R.safari();
            };

            if (state == current_location) { //현재 클릭한 지점 색채우기
                st[0].onmouseover();
            }

            st[0].onclick = function () {
                switch(state) { 
                    case "loc_01":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=서울";
                        //current = state;
                        break;
                    case "loc_02":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=부산";
                        break;
                    case "loc_03":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=대구";
                        break;
                    case "loc_04":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=인천";
                        break;
                    case "loc_05":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=광주";
                        break;
                    case "loc_06":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=대전";
                        break;
                    case "loc_07":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=울산";
                        break;
                    case "loc_08":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=세종";
                        break;	
                    case "loc_09":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=경기도";
                        break;
                    case "loc_10":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=강원도";
                        break;
                    case "loc_11":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=충청북도";
                        break;
                    case "loc_12":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=충청남도";
                        break;
                    case "loc_13":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=전라북도";
                        break;
                    case "loc_14":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=전라남도";
                        break;
                    case "loc_15":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=경상북도";
                        break;
                    case "loc_16":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=경상남도";
                        break;
                    case "loc_17":
                        location.href = bbs_path+"bbs/board.php?bo_table="+bo_table+"&sca=제주도";
                        break;
                    default:
                        location.href="#";
                        break;
                }
            }; // onclick end
        })(aus[state], state);
    } // end for
            
};
