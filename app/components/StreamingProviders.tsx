import React from 'react';
import { Image, Text, View } from 'react-native';

interface StreamingProvidersProps {
  providers: StreamingProviders;
}

const StreamingProvidersComponent: React.FC<StreamingProvidersProps> = ({ providers }) => {
  const allProviders = [
    ...(providers.flatrate || []),
    ...(providers.rent || []),
    ...(providers.buy || [])
  ];

  // Remove duplicates based on provider_id
  const uniqueProviders = allProviders.filter((provider, index, self) =>
    index === self.findIndex(p => p.provider_id === provider.provider_id)
  );

  if (uniqueProviders.length === 0) {
    return (
      <View className="flex-col items-start justify-center mt-5">
        <Text className="text-light-200 font-normal text-sm">Streaming Providers</Text>
        <Text className="text-light-100 font-bold text-sm mt-2">Not available</Text>
      </View>
    );
  }

  return (
    <View className="flex-col items-start justify-center mt-5">
      <Text className="text-light-200 font-normal text-sm">Available On</Text>
      <View className="flex-row flex-wrap gap-x-3 gap-y-2 mt-2">
        {uniqueProviders.slice(0, 12).map((provider) => (
          <View key={provider.provider_id} className="items-center">
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${provider.logo_path}`,
              }}
              className="w-12 h-12 rounded-lg"
              resizeMode="cover"
            />
            <Text className="text-light-200 text-xs mt-1 text-center max-w-12">
              {provider.provider_name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default StreamingProvidersComponent; 