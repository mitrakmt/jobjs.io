app.controller('HomeController', function($scope, $location, $http, $sce) {

  $scope.getGithubJobs = function () {
    $http.get('/api/jobs/github')
      .then((jobs) => {
        console.log(jobs)
        $scope.jobs = jobs.data;
        $scope.jobs.forEach(function (job) {
          job.description = $sce.trustAsHtml(job.description);
        });
      })
  }

  $scope.getDiceJobs = function () {
    $http.get('/api/jobs/dice')
      .then((jobs) => {
        console.log(jobs)
        $scope.jobs = jobs.data;
      })
  }

  $scope.getRemoteokJobs = function () {
    $http.get('/api/jobs/remoteok')
      .then((jobs) => {
        console.log(jobs)
        $scope.jobs = jobs.data;
      })
  }

});
