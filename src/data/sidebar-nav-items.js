export default function() {
  return [
    {
      title: "Explore Antobolo",
      to: "/explorer-overview",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Assignments",
      htmlBefore: '<i class="material-icons">assignment</i>',
      to: "/assignments",
    },
    {
      title: "Books Store",
      htmlBefore: '<i class="material-icons">menu_book</i>',
      to: "/book-store",
    },
    {
      title: "Past Papers",
      htmlBefore: '<i class="material-icons">file_copy</i>',
      to: "/past-papers",
    },
    {
      title: "Shopping Cat",
      htmlBefore: '<i class="material-icons">shopping_cart</i>',
      to: "/user-store",
    },
    {
      title: "Favorites",
      htmlBefore: '<i class="material-icons">favorite</i>',
      to: "/wish-list",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    }
  ];
}
