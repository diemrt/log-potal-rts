import config from './configuration.json'

export type EndPoint = {
    [key: string]: string
}

export const getAPIUrl = () => {
    const { env } = config;
    const endPoints: { [key: string]: EndPoint} = config.endPoints;
    const { protocol, host, port, prefix, version } = endPoints[env];

    let apiUrl = (protocol ? (process + '://') : protocol) + host
    apiUrl = port ? `${apiUrl}:${port}` : apiUrl
    apiUrl = prefix ? `${apiUrl}/${prefix}` : apiUrl
    apiUrl = version ? `${apiUrl}/v${version}` : apiUrl
    return apiUrl
}