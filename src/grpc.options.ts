import { ClientOptions, Transport } from '@nestjs/microservices';

export const grpcOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'index',
    protoPath: process.cwd() + '/src/proto/index.proto',
    loader: {
      includeDirs: [process.cwd() + '/src/proto'],
    },
  },
};
