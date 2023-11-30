<?php
include_once('./_common.php');

define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if(defined('G5_THEME_PATH')) {
    require_once(G5_THEME_PATH.'/index.php');
    return;
}
define("_REACT_","어렵다");
$nodejs = "노드";

if (G5_IS_MOBILE) {
    include_once(G5_MOBILE_PATH.'/index.php');
    return;
}

include_once(G5_PATH.'/head.php');
?>



<h2 class="sound_only">최신글</h2>
<?php echo G5_CSS_URL;?>
<?php echo latest('basic','free',5,100)?>
<?php echo latest('pic_news_list','free',5,100); ?>
<?php echo latest('pic_news_list','mainmenu',5,100);?>
<?php 
include_once(G5_PATH.'/tail.php');