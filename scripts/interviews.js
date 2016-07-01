var myApp=angular.module( 'myApp', [] );

myApp.controller( 'interviewersController', [ '$scope', '$http', function( $scope, $http ){
  // maser arrays
  $scope.students=[];
  $scope.interviewers=[];
  $scope.interviewTimes=[];
  $scope.intervewSettings={ startTime: 3, length: 20 };

  $scope.addInterviewer = function(){
    console.log( 'in addInterviewer:', $scope.interviewerIn );
    //new object from input
    var newInterviewer={
        name: $scope.interviewerIn,
        company: $scope.interviewerCompanyIn
    };
    // push to master array
    $scope.interviewers.push( newInterviewer );
    // clear inputs
    $scope.interviewerIn='';
    $scope.interviewerCompanyIn='';
  }; // end add interviewer

  $scope.addStudent = function(){
    console.log( 'in addStudent:', $scope.studentIn );
    // new student object
    var newStudent={
      name: $scope.studentIn,
      interviews: 0
    };
    // push to master array
    $scope.students.push( newStudent );
    // clear input
    $scope.studentIn='';
  }; // end add student

  $scope.setupInterviews = function(){
    $scope.interviewTimes = [];
    console.log( 'in setupInterviews' );
    var myTime = $scope.interviewStartTimeIn;
    var timeMin = 0;
    var displayTime ='';

    for( i=0; i < $scope.interviewCountIn; i++ ){
      // scrub time for display
      if( timeMin >= 60){
        timeMin = 0;
        myTime++;
      }
      if( timeMin < $scope.interviewTimeIn ){
        displayTime = myTime + ':00';
      }
      else {
        displayTime = myTime.toString() + ':' + timeMin.toString();
      } // end time scrub

      $scope.interviewTimes.push( displayTime );
      // setup next rond's time
      timeMin+=Number( $scope.interviewTimeIn );
    }
    console.log( $scope.interviewTimes );
    // clear inputs
    $scope.interviewTimeIn='';
    $scope.interviewCountIn='';
    $scope.interviewStartTimeIn='';
  }; // end setup interviews

}]);
