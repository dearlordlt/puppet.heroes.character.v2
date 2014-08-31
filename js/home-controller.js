puppetHero.controller('homeController', function($scope, User, $http, $templateCache) {

    $scope.User = User;

    $scope.message = 'App is under construction, roll some dices while we working.';
    $scope.footer = {first:'I`m epic footer message!', second:"another epic message"};

    $scope.dice1 = 1;
    $scope.dice2 = 1;
    $scope.dice3 = 1;

    $scope.highScore = 3;
    $scope.rolls = 0;

    $scope.rollDice = function () {
        if($scope.highScore >= 3) {
            $scope.hola = true;
            return;
        }
        $scope.dice1 = Math.floor((Math.random() * 6) + 1);
        $scope.dice2 = Math.floor((Math.random() * 6) + 1);
        $scope.dice3 = Math.floor((Math.random() * 6) + 1);

        $scope.rolls ++;

        var result = $scope.dice1 + $scope.dice2 + $scope.dice3;
        if(result > $scope.highScore) $scope.highScore = result;
    };

    $scope.newGame = function () {
        $scope.dice1 = 1;
        $scope.dice2 = 1;
        $scope.dice3 = 1;
        $scope.highScore = 3;
        $scope.rolls = 0;
        $scope.hola = false;
        $("#submitScore").removeAttr("disabled");
        $scope.scoreTable = "";
    };

    $scope.SaveScore = function() {
        if($("#gameName").val() == "") {
            $("#gameNameDiv").attr('class', 'form-group has-error');
            return;
        }

        $("#submitScore").attr("disabled", "disabled");

        var gameData = {
                name: $("#gameName").val(),
                score: $scope.rolls,
                date: new Date()
            };

        $scope.codeStatus = "";

        var request = $http({
            method: "POST",
            url: "http://vds000004.hosto.lt/saras/puppet_character/services/diceroller.php",
            data: gameData,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            cache: $templateCache
        }).success(function( result ) {
                $scope.codeStatus = result.data;
                $scope.scoreTable = result;
                console.log($scope.scoreTable);
            }
        ).error(function( result ) {
            $scope.codeStatus = result || "Request failed";
        });
        return false;
    };
});
