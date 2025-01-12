// Логічний &&
// const Mailbox = ({ username, messages }) => {
//   return (
//     <>
//       <p>Hello {username}</p>
//       {messages.length > 0 && <p>You have {messages.length} unread messages</p>}
//       ;
//     </>
//   );
// };

// Тернарний оператор
// const Mailbox = ({ name, unreadMessages }) => {
//   return (
//     <>
//       <p>Hello {name}</p>
//       <p>
//         {unreadMessages.length > 0
//           ? `You have ${unreadMessages.length} unread messages`
//           : 'No unread messages'}
//       </p>
//       ;
//     </>
//   );
// };

// Коли потрібно відобразити різну розмітку
// const Mailbox = ({ username, messages }) => {
//   return (
//     <div>
//       <p>Hello {username}</p>
//       {messages.length > 0 ? (
//         <div>
//           <p>You have {messages.length} unread messages</p>
//           <MessageList messages={messages} />
//         </div>
//       ) : (
//         <p>No unread messages</p>
//       )}
//     </div>
//   );
// };

// export default Mailbox;
