FROM microsoft/aspnetcore:2.0-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0-nanoserver-1709 AS build
WORKDIR /src
COPY webapi_core_HelloWorld/webapi_core_HelloWorld.csproj webapi_core_HelloWorld/
RUN dotnet restore webapi_core_HelloWorld/webapi_core_HelloWorld.csproj
COPY . .
WORKDIR /src/webapi_core_HelloWorld
RUN dotnet build webapi_core_HelloWorld.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish webapi_core_HelloWorld.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "webapi_core_HelloWorld.dll"]
