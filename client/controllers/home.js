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
      .then(() => {
        $scope.scopeLoaded = false;
      })
  }

  $scope.getDiceJobs = function () {
    $http.get('/api/jobs/dice')
      .then((jobs) => {
        console.log(jobs)
        $scope.jobs = jobs.data;
        $scope.scopeLoaded = false;
      })
  }

  $scope.getRemoteokJobs = function () {
    $http.get('/api/jobs/remoteok')
      .then((jobs) => {
        console.log(jobs);
        $scope.jobs = jobs.data;
        $scope.jobs.forEach(function (job) {
          job.description = $sce.trustAsHtml(job.description);
        });
      })
      .then(() => {
        $scope.scopeLoaded = false;
      })
  }

  $scope.init = function () {
    $scope.scopeLoaded = true;
  }
  $scope.init();

  $scope.githubInit = function () {
    $scope.scopeLoaded = true;
    $scope.getGithubJobs()
  }

  $scope.diceInit = function () {
    $scope.scopeLoaded = true;
    $scope.getDiceJobs()
  }

  $scope.remoteokInit = function () {
    $scope.scopeLoaded = true;
    $scope.getRemoteokJobs()
  }

});
