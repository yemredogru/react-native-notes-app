// UserProfileScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const UserProfileScreen = () => {
  // Rastgele kullanıcı bilgileri
  const user = {
    name: 'John Doe',
    username: 'johndoe123',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: 'https://placekitten.com/300/200' }} />
        <Card.Content>
          <Avatar.Image size={80} source={{ uri: 'https://placekitten.com/80/80' }} />
          <Title>{user.name}</Title>
          <Paragraph>@{user.username}</Paragraph>
          <Paragraph>{user.email}</Paragraph>
        </Card.Content>
        <Card.Content>
          <Title>Bio</Title>
          <Paragraph>{user.bio}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default UserProfileScreen;
