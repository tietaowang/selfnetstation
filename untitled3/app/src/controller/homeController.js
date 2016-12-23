/**
 * Created by zhipeng on 16/12/15.
 */
/**
 * Created by zhipeng on 16/12/17.
 */
angular.module('app').controller('homeCtrl', function($scope) {

    // 设置轮播图图片间隔
           $scope.myInterval = 5000;
          // 轮播图数据初始化
         var slides = $scope.slides = [];
        // 添加轮播图源
       slides.push({ image: 'static/img/banner.png', text: '亲爱的你，情人节快乐' });
        slides.push({ image: 'static/img/banner.png', text: '亲爱的你，情人节快乐' });

})