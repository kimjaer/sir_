<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
//최근게시글 스킨
$list_count = (is_array($list) && $list) ? count($list) : 0;
?>

<div class="lat <?php echo $bo_table; ?>">
    <h2 class="text-center mb-5">
        <?php echo $bo_subject ?>
    </h2>
    <ul class="row">
    <?php for ($i=0; $i<$list_count; $i++) {  ?>
        <li class="col-3 border p-5 <?php echo $list[$i]['subject']; ?> <?php echo $bo_table.$i; ?> ">
            <?php
            echo $list[$i]['wr_content'];
            ?>
        </li>
    <?php }  ?>

    <?php if ($list_count == 0) { //게시물이 없을 때  ?>
    <li class="empty_li">게시물이 없습니다.</li>
    <?php }  ?>
    </ul> 

</div>