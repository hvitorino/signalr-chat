using SignalR.Hubs;

namespace SignalR.ChatApp
{
    [HubName("chat")]
    public class ChatHub : Hub
    {
        public void Subscribe(string topic)
        {
            Groups.Add(Context.ConnectionId, topic);
        }

        public void Publish(string topic, string message)
        {
            Clients[topic].receive(message);
        }
    }
}