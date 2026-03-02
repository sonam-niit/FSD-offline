# Render Data inside React using props

1. create 1 users.json file under the asset folder
2. Created seperate type file for type which we can use in multiple files
3. create folder named types and create file named user.ts (exported as well)
4. UserList Component Created: which accepting props coming from parent component and rendering user details
5. Inside app component :
  - imported json file data and named it UserData (you can give any name)
  - passed that data as props: <UserList users={UserData}>
  - to make it more secure I used User type while passing props
  - <UserList users={UserData as User[]}>
  - for above line User needs to be exported