angular.module("App", [])
.factory("UserServices", () => {
    let user_services = {};

    //Metodo para setear en el localstorage
    user_services.AddUser = (ArrayUsers) => {
        let array_apload = JSON.stringify(ArrayUsers);
        localStorage.setItem('users', array_apload);
    }

    //Metodo para traer todos los usuarios 
    user_services.GetAllUsers = () => {
        const all = JSON.parse(localStorage.getItem('users'));
        return all;
    }

    //Retorno el objeto con todos los metodos 
    return user_services;

})
.controller("User-Controller", ($scope, UserServices) => {
    //Array de usuarios para almacenar 
    $scope.all_users = [];
    
    $scope.NewUser = {
        name: "",
        ocupation: ""
    };
    


    $scope.got_users = UserServices.GetAllUsers();
    console.log($scope.got_users);

    $scope.OperacionUser = () => {
        $scope.all_users.push($scope.NewUser);
        UserServices.AddUser($scope.all_users);
        $scope.got_users.push($scope.NewUser);
        $scope.NewUser = {};
    }

});

